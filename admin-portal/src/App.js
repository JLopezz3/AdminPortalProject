import React from 'react';
import './App.css';
import Header from './Header';
import HomePage from "./HomePage";
import Finance from "./Finance";
import HR from "./HR";
import Sales from "./Sales";
import Tech from "./Tech";
import Support from "./Support";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/finance">
            <Header />
            <Finance />
          </Route>
          <Route path="/hr">
            <Header />
            <HR />
          </Route>
          <Route path="/sales">
            <Header />
            <Sales />
          </Route>
          <Route path="/tech">
            <Header />
            <Tech />
          </Route>
          <Route path="/support">
            <Header />
            <Support />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
