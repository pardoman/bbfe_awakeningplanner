import React, { Component } from 'react';

import inventory from './Inventory';
import Summon from './Summon';
import SummonView from './SummonView';

class MySummons extends Component {
    constructor(props){
        super(props)
        this.state = this.getNewStateObject();
        this.onAddSummon = this.onAddSummon.bind(this);
        this.onInventoryChange = this.onInventoryChange.bind(this);
    };

    componentDidMount() {
      inventory.addListener( this.onInventoryChange );
    }

    componentWillUnmount() {
      inventory.removeListener( this.onInventoryChange );
    }

    render() {
        var that = this;
        return (
            <div>
              <button onClick={that.onAddSummon}>
                Add Summon!
              </button>
              {that.state.summons.map(function(id, index) {
                  var summonKey = that.state.summonKeys[index];
                  return <SummonView summonId={id} key={summonKey} summonKey={summonKey} />;
              })}
            </div>
        );
    }

    getNewStateObject() {
      return { 
        summons: inventory.summons.concat(), 
        summonKeys: inventory.summonKeys.concat()  
      };
    }

    onAddSummon(event) {
      inventory.addSummon( Summon.getRandomSummonId() );
    }

    onInventoryChange() {
      this.setState( this.getNewStateObject() );
    }
}

export default MySummons;
