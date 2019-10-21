import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import HeaderAppBar from './components/AppBar';
import ListAllIps from './components/ListAllIps';
import ListAllProducts from './components/ListAllProducts';
import ClientForm from './components/form/ClientForm';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderAppBar />
        <Switch>
          <Route path="/ips">
            <ListAllIps />
          </Route>
          <Route path="/produtos">
            <ListAllProducts />
          </Route>
          <Route path="/ip/new">
            <ClientForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
