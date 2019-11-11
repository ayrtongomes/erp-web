import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import HeaderAppBar from './components/AppBar';
import ListAllIps from './components/ListAllIps';
import ListAllProducts from './components/ListAllProducts';
import Inventary from './components/Inventary';
import Report from './components/Report';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderAppBar />
        <Switch>
          <Route path="/report/:id">
            <Report />
          </Route>
          <Route path="/produtos">
            <ListAllProducts />
          </Route>
          <Route path="/inventary/new">
            <Inventary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
