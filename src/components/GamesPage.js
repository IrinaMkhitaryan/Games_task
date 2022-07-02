import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesActions } from "../store/games/actions";
import Menu from "./Menu/Menu";
import Game from "./Game/Game";
import './style.css'

function GamesPage() {
    const dispatch = useDispatch();

    const gamesList  = useSelector(state => state.games_t.gamesList);
    const categories = useSelector(state => state.games_t.categories);

    const [games, setGames]                       = useState([]);
    const [searchValue, setSearchValue]           = useState('');
    const [activeCategory, setActiveCategory]     = useState({});
    const [largeGames, setLargeGames]             = useState([]);
    const [smallGames, setSmallGames]             = useState([]);

    const createData = (categories, games) => {
        categories && categories.forEach(category => {
            category.games.forEach(game => {
                games.forEach(g => {
                    if (g.id === game.id) {
                        g.top = game.top
                    }
                })
            })
        });
        const isLarge = games.filter(game => game.top === true);
        const isSmall = games.filter(game => game.top === false);
        setGames(isLarge.concat(isSmall))
        setLargeGames(isLarge);
        setSmallGames(isSmall);
    };

    useEffect(() => {
        dispatch(gamesActions.getGames()).then(res => {
            setActiveCategory({...res.categories[0]});
            const list = [...res.games];
            createData(res.categories, list)
        })
    }, []);

    useEffect(() => {
        createData(categories, games);
    }, [activeCategory]);

    const getGamesByCategory = useCallback((category) => {
        const categoryData = categories && categories.find(item => item.id === category.id);
        setActiveCategory(category);
        const list = gamesList.filter(it => categoryData.games.filter(item => item.id === it.id).length);
        setGames(list)
    }, [categories, games, activeCategory, gamesList]);

    const toggleFavoriteHandler = useCallback((data) => {
        const games = [...gamesList];
        games.forEach(game => {
            if (game.id === data.id) {
                game.isFavorit = !game.isFavorit;
            }
        });
        dispatch(gamesActions.setAsFavorite(games));
    }, [gamesList]);

    const setFavorites = useCallback(() => {
        const games = gamesList.filter(game => game.isFavorit === true);
        createData(categories, games);
    }, [gamesList]);

    const renderGames = (games, size) => {
        return <div className={size}>
            {
                games.filter(val => {
                    if (searchValue === '') {
                        return val
                    } else if (val.name.toLowerCase().includes(searchValue.toLowerCase())) {
                        return val
                    }
                }).map(game => (
                    <Game game={game} toggleFavoriteHandler={toggleFavoriteHandler}/>

                ))
            }
        </div>
    };
    return (
        <div className='content'>
            <div className='menu'>
                <Menu search={(event) => setSearchValue(event.target.value)}
                      getGamesByCategory={getGamesByCategory}
                      setFavorites={setFavorites}
                      activeCategory={activeCategory}/>
            </div>
            <div className='games'>
                {renderGames(largeGames, 'big')}
                {renderGames(smallGames, 'small')}
            </div>
        </div>
    )
}
export default memo(GamesPage);

