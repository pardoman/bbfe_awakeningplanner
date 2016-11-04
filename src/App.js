import React, { Component } from 'react';
import './App.css';

import AweHeader from './AwakeningHeader';
import MyStash from './MyStash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FFBE Awakening Planner</h2>
          <div>
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" />
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" />
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" />
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" />
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" />
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" />
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AweHeader />
        <MyStash />
        <AweHeader />
      </div>
    );
  }
}

export default App;
