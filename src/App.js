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

        <div className="refia_cute">
          <img src={refiaAnimation} alt="refia_victory" />
        </div>

        
        <div>
          Assets and info gathered from
        </div>
        <div className="footer-credits"> 
          <a href="https://exviuswiki.com/" target="blank">
            <div className="exviusWikiContainer">
              <img
                className="exviusWikiImage"
                src="https://exviuswiki.com/skins/Exvius/resources/images/site-logo.jpg" 
                alt="exviuswiki.com" />
            </div>
          </a>
        </div>
        <div className="footer-credits">
          Character order inspired by <a href="https://i.imgur.com/TQBsQie.jpg" target="blank">~John Smith</a>
        </div>
        <div className="footer-credits">
          Join the conversation at <a href="https://www.reddit.com/r/FFBraveExvius" target="blank">/r/FFBraveExvius</a>
        </div>

        <div className="bottom-padding"></div>

      </div>
    );
  }
}

export default App;
