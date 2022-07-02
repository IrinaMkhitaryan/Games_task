import React, { memo } from "react";

import './style.css'
import Category from "../Categories/Categories";

function Menu(props) {
    const {
        search,
        getGamesByCategory,
        setFavorites
    } = props;
    return (
        <div>
            <input type='text' placeholder='Search' onChange={search}/>
            <div className='category'>
                <Category getGamesByCategory={getGamesByCategory}/>
            </div>
            <div className='favorites' onClick={setFavorites}>Favorites</div>
        </div>
    )
}
export default memo(Menu);