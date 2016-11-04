import React, { Component } from 'react';

import inventory from './Inventory';
import SummonData from './Summons';

class SummonView extends Component {
    
    constructor(props){
        super(props)
        this.state = { summonId: props.summonId };
        this.onRemoveThisSummon = this.onRemoveThisSummon.bind(this);
    };

    render() {
        var summonData = this.getSummonData(this.state.summonId);
        return (
            <div>
                {summonData.materials.map(function(matCount, index) {
                    return <input 
                        type="number" 
                        value={matCount}
                        key={index}
                        readOnly
                    />;
                })}
                <button onClick={this.onRemoveThisSummon}>
                    (-)
                </button>
            </div>
        );
    }

    onRemoveThisSummon() {
        // May delete the "wrong" summon, but will always be of the same type
        // Meaning, If I have 3 Cecils, then I will delete a Cecil for sure,
        // but maybe not the one that I clicked on. Oh well.
        inventory.removeSummon( this.state.summonId );
    }

    getNewStateObject() {
      return { summons: inventory.summons.concat() };
    }

    getSummonData(summonId) {
        return SummonData[summonId];
    }
}

export default SummonView;
