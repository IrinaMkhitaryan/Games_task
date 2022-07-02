import React, { memo } from "react";
import Category from "../Categories/Categories";

import './style.css'

function Menu(props) {
    const {
        search,
        getGamesByCategory,
        setFavorites,
        activeCategory
    } = props;
    return (
        <div>
            <input type='text' placeholder='Search' onChange={search}/>
            <div className='category'>
                <Category getGamesByCategory={getGamesByCategory} activeCategory={activeCategory}/>
            </div>
            <div className='favorites' onClick={setFavorites}>Favorites</div>
        </div>
    )
}
export default memo(Menu);