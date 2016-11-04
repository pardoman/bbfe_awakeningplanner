import React, { Component } from 'react';
import './SummonView.css';

import inventory from './Inventory';
import SummonData from './Summons';

class SummonView extends Component {
    
    constructor(props){
        super(props)
        this.state = { summonId: props.summonId, summonKey: props.summonKey };
        this.onRemoveThisSummon = this.onRemoveThisSummon.bind(this);
    };

    render() {
        var summonData = this.getSummonData(this.state.summonId);
        return (
            <div className="Summon-Card">
                <img src={summonData.src} /> 
                {summonData.materials.map(function(matCount, index) {
                    return <input className="Material-Requirement"
                        value={matCount}
                        key={index}
                        readOnly
                    />;
                })}
                <button 
                    className="Button-Remove-Summon" 
                    onClick={this.onRemoveThisSummon}>
                    ✕
                </button>
            </div>
        );
    }

    onRemoveThisSummon() {
        inventory.removeSummon( this.state.summonId, this.state.summonKey );
    }

    getNewStateObject() {
      return { summons: inventory.summons.concat() };
    }

    getSummonData(summonId) {
        return SummonData[summonId];
    }
}

export default SummonView;
