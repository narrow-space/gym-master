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
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Authprovider from './Context/Authprovider';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      
    <Authprovider>

    <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route  path="/home">
          <Home></Home>
          </Route>
          <Route  path="/details/:detailsId">
          <Singledetails></Singledetails>
          </Route>
          <Route  path="/login">
          <Login></Login>
          </Route>
          <Route  path="/register">
          <Register></Register>
          </Route>
          <Route path="/services">
         <Services></Services>
          </Route>
        </Switch>
      </Router>

    </Authprovider>
      
      
     
    </div>
  );
}

export default App;
