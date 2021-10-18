import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Singledetails from './Components/Body/Singledetails/Singledetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/details/:detailsId">
          <Singledetails></Singledetails>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
