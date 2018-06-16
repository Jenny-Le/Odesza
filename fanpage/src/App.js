import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SplashPage/>
        <HomePage/>

      </div>
    );
  }
}

export default App;
