import React, { Component } from 'react';

import Button from '../src/components/atoms/Button';

import logo from './media/logo.svg';

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto' }} className="App">
        <header className="App-header">
          <Button>Hi there</Button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
