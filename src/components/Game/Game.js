import { memo } from "react";
import React    from "react";
import "./style.css";

function Games(props) {
    const {
        game,
        toggleFavoriteHandler
    } = props;
    return (
        <div className={game.top ? 'largeImageContent' : 'smallImageContent'}>
            <img alt={game.name} className="image"
                 src={game.top ? game.img && game.img.large ? `../../../assets${game.img.large}` :
                     `../../../assets/placeholder/large/placeholder.jpg` :
                     game.img && game.img.small ? `../../../assets${game.img.small}` :
                         `../../../assets/placeholder/small/placeholder.jpg`}
            />
            {!game.img ? <div className="name">{game.name}</div> : null}
            {
                game.top ?
                    <img className="favImage "
                         src={game.isFavorit ? "../../../assets/icons/icon-favorites-active.svg"
                             : "../../../assets/icons/icon-favorites-noactive.svg"}
                         onClick={() => toggleFavoriteHandler(game)}

                    /> :
                    <img className="favImage "
                         src={game.isFavorit ? "../../../assets/icons/icon-favorites-active.svg"
                             : "../../../assets/icons/icon-favorites-noactive.svg"}
                         onClick={() => toggleFavoriteHandler(game)}

                    />
            }
        </div>
    )
};
export default memo(Games);