import React, { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";

import "./style.css";

function Categories(props) {
    const {
        getGamesByCategory
    } = props;
    const categories = useSelector(state => state.games_t.categories);
    console.log(categories)

    const [active, setActive] = useState('All games');
    console.log(active)
    const setActiveCategory = useCallback((category) => {
        setActive(category.nameKey);
        getGamesByCategory(category);
    },[active]);
    return (
            <ul>
                {categories && categories.length && categories.map(category => (
                <li key={category.id} onClick={() => setActiveCategory(category)} className={active === category.nameKey ? 'active' : ''}>{category.nameKey}</li>
                ))}
            </ul>
    )
};
export default memo(Categories);