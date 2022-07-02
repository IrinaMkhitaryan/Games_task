import { gamesActionTypes } from "./actions";

const initialState = {
    category: [],
    gamesList: []
};

export const gamesReducer = (state = initialState, action) => {
    switch(action.type) {
        // case catsActionTypes.GET_CATEGORY_SUCCESS:
        //     return { ...state, category: action.payload };
        // case catsActionTypes.GET_CATS_SUCCESS:
        //     return { ...state, catsData: action.payload };
        case gamesActionTypes.GET_GAMES_SUCCESS:
            return {
                ...state,
                gamesList: action.payload.games,
                categories: action.payload.categories,
            };
        case gamesActionTypes.SET_AS_FAVORITE:
            return {
                ...state,
                gamesList: action.payload,
            };
        default:
            return state
    }
};