import { combineReducers } from "redux"

import { gamesReducer as games_t} from "./games/reduser";

export const reducers = combineReducers({
    games_t,
});