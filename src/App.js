import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Hellowwwwwwwww Reak!</h1>
        <h2>tambah h2 nih</h2> 
        <h3> tambah h3 juga nih</h3>
        <h4> tambah h4 test </h4>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            EWEOOWWW <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
