import React, { Component } from 'react';
import './App.css';

import AweHeader from './AwaHeader';
import MySummons from './MySummons';
import MyStash from './MyStash';
import MyPlanner from './MyPlanner';

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
        <MySummons />
        <MyStash />
        <AweHeader />
        <MyPlanner />
      </div>
    );
  }
}

export default App;
