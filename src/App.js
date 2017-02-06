import React, { Component } from 'react';

import MyStashHeader from './MyStashHeader';
import MyStash from './MyStash';
import AweHeader from './AwaHeader';
import MyPlannerHeader from './MyPlannerHeader';
import MyPlanner from './MyPlanner';
import FilterSummons from './FilterSummons';
import AddSummon from './AddSummon';
import ContentSummons from './ContentSummons';
import Awakener3d from './awakener3d/Awakener3d';

import './App.css';
import './table.css';

import rarity6 from './images/Rarity-6.png';
import refiaAnimation from './images/refia_victory.gif';
import wikiSiteLogo from './images/wiki-site-logo.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FFBE Awakening Planner</h2>
          <div>
            <img src={rarity6} alt="6start" />
            <img src={rarity6} alt="6start" />
            <img src={rarity6} alt="6start" />
            <img src={rarity6} alt="6start" />
            <img src={rarity6} alt="6start" />
            <img src={rarity6} alt="6start" />
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

        <FilterSummons />
        <AddSummon />

        <table className="centerTable">
          <ContentSummons />
        </table>

        <Awakener3d />

        <div className="refia_cute">
          <img src={refiaAnimation} alt="refia_victory" />
        </div>

        
        <div>
          Assets and info gathered from
        </div>
        <div className="footer-credits"> 
          <a href="http://exvius.gamepedia.com/" target="blank">
            <div className="exviusWikiContainer">
              <img
                className="exviusWikiImage"
                src={wikiSiteLogo} 
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
