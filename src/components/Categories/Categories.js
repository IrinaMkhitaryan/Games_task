import React, { memo, useCallback } from "react";
import { useSelector } from "react-redux";

import "./style.css";

function Categories(props) {
    const {
        getGamesByCategory,
        activeCategory
    } = props;
    const categories = useSelector(state => state.games_t.categories);

    const setActiveCategory = useCallback((category) => {
        getGamesByCategory(category);
    }, [activeCategory]);
    return (
        <ul>
            {categories && categories.length && categories.map(category => (
                <li key={category.id}
                    onClick={() => setActiveCategory(category)}
                    className={activeCategory.nameKey === category.nameKey ? 'active' : ''}
                >{category.nameKey}</li>
            ))}
        </ul>
    )
};
export default memo(Categories);