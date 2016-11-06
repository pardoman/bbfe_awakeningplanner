import React, { Component } from 'react';

import AddSummon from './AddSummon';
import Content from './Content';

import './App.css';
import './table.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FFBE Awakening Planner</h2>
          <div>
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" alt="6start" />
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" alt="6start" />
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" alt="6start" />
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" alt="6start" />
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" alt="6start" />
            <img src="https://exviuswiki.com/images/6/63/Rarity-6.png" alt="6start" />
          </div>
        </div>
        <AddSummon />
        <table className="centerTable">
          <Content />
        </table>
      </div>
    );
  }
}

export default App;
