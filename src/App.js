import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hellow World</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home />
          </div>
        </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     {/* To get started, edit <code>src/App.js</code> and save to reload. */}
      //   </p>
      // </div>
      // <div>Hellow World</div>
    );
  }
}

export default App;
