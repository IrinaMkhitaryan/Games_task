import axios from 'axios';

export const gamesActionTypes = {
    GET_GAMES_SUCCESS: 'GET_GAMES_SUCCESS',
    SET_AS_FAVORITE: 'SET_AS_FAVORITE'
};

export const gamesActions = {
    getGamesSuccess: (err) => ({ type: gamesActionTypes.GET_GAMES_SUCCESS, payload: err }),
    setFavorite: (err) => ({ type: gamesActionTypes.SET_AS_FAVORITE, payload: err }),

    getGames: () => async (dispatch) => {
        try {
            const response = await axios.get('./data/gamesList.json')
            // const data = await response.json();
            console.log(response)
            dispatch(gamesActions.getGamesSuccess(response.data));
            return response.data
        } catch (error) {
            console.log(error)
        }

    },
    setAsFavorite: (data) => (dispatch) => {
        dispatch(gamesActions.setFavorite(data));
    }
};