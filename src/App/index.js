import React, { Component } from 'react';

import {
  Navbar
} from 'features';

import './App.css';



export default class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
    );
  }
}
