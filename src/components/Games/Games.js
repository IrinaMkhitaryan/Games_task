import React, { memo } from "react";

import './style.css'

function Games(props) {
    const {
       games
    } = props;

    return (
        <>
            <div className='imageContent'>
                {games.games.length && games.games.map(game => (
                    <>
                    <img src={game.img ? game.top ? `../../../assets/${game.img.large}` :`../../../assets/${game.img.small}` : ''} className='image'/>
                    {/*<div>{game.name}</div>*/}
                    </>
                ))}

            </div>

        </>
    )
};
export default memo(Games);