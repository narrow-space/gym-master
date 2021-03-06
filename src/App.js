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
import Privateroute from './Components/Login/Privateroute/Privateroute';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/NotFound page/Notfound';

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
          <Privateroute path="/details/:detailsId">
          <Singledetails></Singledetails>
          </Privateroute>
          <Route  path="/login">
          <Login></Login>
          </Route>
          <Route  path="/register">
          <Register></Register>
          </Route>

          <Route path="/services">

         <Services></Services>

          </Route>

          <Privateroute path="/aboutus">
            <About>

            </About>
          </Privateroute>
          <Privateroute path="/contactus">
            <Contact>

            </Contact>
          </Privateroute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>

    </Authprovider>
      
      
     
    </div>
  );
}

export default App;
