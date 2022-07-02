import React, { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gamesActions } from "../store/games/actions";
import Menu from "./Menu/Menu";
import Game from "./Game/Game";
import './style.css'

function GamesPage() {
    const dispatch = useDispatch();

    const gamesList = useSelector(state => state.games_t.gamesList);
    const categories = useSelector(state => state.games_t.categories);

    const [games, setGames] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [activeCategoryId, setActiveCategoryId] = useState('');
    const [largGames, setLargGames] = useState([]);
    const [smallGames, setSmallGames] = useState([]);

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
        const isLarg = games.filter(game => game.top === true);
        const isSmall = games.filter(game => game.top === false);
        setGames(isLarg.concat(isSmall))
        setLargGames(isLarg);
        setSmallGames(isSmall);
    };

    useEffect(() => {
        dispatch(gamesActions.getGames()).then(res => {
            const list = [...res.games];
            createData(res.categories, list)
        })
    }, []);
    useEffect(() => {
        createData(categories, games);
    }, [activeCategoryId]);

    const getGamesByCategory = useCallback((category) => {
        const categoryData = categories && categories.find(item => item.id === category.id);
        setActiveCategoryId(category.id);
        const list = gamesList.filter(it => categoryData.games.filter(item => item.id === it.id).length);
        setGames(list)
    }, [categories, games, activeCategoryId, gamesList]);

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
    return (
        <div className='content'>
            <div className='menu'>
                <Menu search={(event) => setSearchValue(event.target.value)}
                      getGamesByCategory={getGamesByCategory}
                      setFavorites={setFavorites}/>
            </div>
            <div className='games'>
                <div className="big">
                    {
                        largGames.filter(val => {
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
                <div className="small">
                    {
                        smallGames.filter(val => {
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
            </div>
        </div>
    )
};
export default memo(GamesPage);

