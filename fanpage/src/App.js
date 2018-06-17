import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
        <Route exact path="/" component={SplashPage}/>
        <Route exact path="/HomePage" component={HomePage}/>

        {/* <SplashPage/>
        <HomePage/> */}
      
      </div>
      </Router> 
    );
  }
}

export default App;
