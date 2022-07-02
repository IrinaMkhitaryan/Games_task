import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = (store) => (next) => (action) => {
    const state = store.getState();

    return next(action);
};

const thunk = ({ dispatch, getState }) => (next) => (action) => {
    return typeof action === "function" ? action(dispatch, getState) : next(action);
};

export const middlewares = composeWithDevTools(applyMiddleware(logger, thunk));