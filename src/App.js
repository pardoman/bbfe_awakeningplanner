import React, { Component } from 'react';

import MyStashHeader from './MyStashHeader';
import MyStash from './MyStash';
import AweHeader from './AwaHeader';
import MyPlannerHeader from './MyPlannerHeader';
import MyPlanner from './MyPlanner';
import AddSummon from './AddSummon';
import ContentSummons from './ContentSummons';

import './App.css';
import './table.css';

import refiaAnimation from './images/refia_victory.gif';

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
        
        <table className="centerTable">
          <tbody>
                <MyStashHeader /> 
                <MyStash />
                <MyPlannerHeader />
                <MyPlanner />
                <AweHeader />
            </tbody>
        </table>

        <AddSummon />

        <table className="centerTable">
          <ContentSummons />
        </table>

        <div className="footer">
          <img src={refiaAnimation} alt="refia_victory" />
        </div>

      </div>
    );
  }
}

export default App;
