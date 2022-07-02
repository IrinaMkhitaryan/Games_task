import './App.css';
import React, { useEffect } from "react";

import Provider from "react-redux/es/components/Provider";

import { store }    from "./store";
import Router from "react-router-dom/es/Router";
import {createBrowserHistory} from 'history'
import GamesPage from "./components/GamesPage";
import { gamesActions } from "./store/games";
import { applyMiddleware as dispatch } from "redux";

function App() {
    const history = createBrowserHistory();
    useEffect(() => {
        dispatch(gamesActions.getGames())
    }, [dispatch]);
  return (
      <Provider store={store}>
          <div className="App">
              <Router history={history}>
              <GamesPage/>
              </Router>
          </div>
      </Provider>
  );
}

export default App;
