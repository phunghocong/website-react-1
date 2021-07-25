import React from 'react';
import Navbar from './components/NAVBAR.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products.js';
import SignIn from './components/pages/SignIn.js';
import SignUp from './components/pages/SignUp.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          {/* <Route path ="/"/> */}
          <Route path="/" exact component ={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />         
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          </Switch>  
      </Router>
    
    </>
  );
}

export default App;
