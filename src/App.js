import './App.css';
import React from "react";

import Provider from "react-redux/es/components/Provider";

import { store }    from "./store";
import Router from "react-router-dom/es/Router";
import {createBrowserHistory} from 'history'
import GamesPage from "./components/GamesPage";

function App() {
    const history = createBrowserHistory();
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
