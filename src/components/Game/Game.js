import { memo, useCallback } from "react";
import React from "react";
import "./style.css";
import { gamesActions } from "../../store/games";
import { useDispatch } from "react-redux";

function Games(props) {
    const {
        game,
        toggleFavoriteHandler
    } = props;
    const dispatch = useDispatch();
    // const toggleFavoriteHandler = useCallback((game) => {
    //     const newGameData = {...game};
    //     newGameData.isFavorit = true;
    //     console.log(newGameData)
    //     dispatch(gamesActions.setAsFavorite(newGameData))
    //
    // }, []);
    console.log(game)
    return (
        <div className="imageContent">
            {


                <img alt={game.name} className="image"
                src={game.top ?  game.img && game.img.large ? `../../../assets${game.img.large}`: `../../../assets/placeholder/large/placeholder.jpg` :
                game.img && game.img.small ? `../../../assets${game.img.small}` : `../../../assets/placeholder/small/placeholder.jpg`}

                />
            }


            {
                game.top ?
                    <img className="favImageLarge"
                         src={game.isFavorit ?"../../../assets/icons/icon-favorites-active.svg"
                             : "../../../assets/icons/icon-favorites-noactive.svg"}
                         onClick={()=>toggleFavoriteHandler(game)}

                    /> :
                    <img className="favImageSmall"
                         src={game.isFavorit ? "../../../assets/icons/icon-favorites-active.svg"
                         :"../../../assets/icons/icon-favorites-noactive.svg"}
                         onClick={()=>toggleFavoriteHandler(game)}

                    />
            }




        </div>

    )
};
export default memo(Games);