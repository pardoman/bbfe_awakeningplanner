import React, { Component } from 'react';

import inventory from './Inventory';
import SummonData from './Summons';

import './SummonView.css';
import './table.css';


class SummonView extends Component {
    
    constructor(props){
        super(props)
        this.state = { 
            summonId: props.summonId, 
            summonKey: props.summonKey,
            awakeningMode: props.awakeningMode 
        };
        this.onRemoveThisSummon = this.onRemoveThisSummon.bind(this);
    };

    render() {
        var summonData = this.getSummonData(this.state.summonId);
        return (
            <tr>
                <td>
                    <a href={summonData.wiki} target="blank">
                        <img src={summonData.src} className="tableCellImage" alt={summonData.name} title={summonData.name} />
                    </a> 
                </td>
                {summonData.materials.map(function(matCount, index) {
                    return <td key={index}>
                                <input
                                    className="tableCell"
                                    value={matCount}
                                    readOnly
                                />
                            </td>;
                })}
                <td>
                    <button 
                        className="Button-Remove-Summon" 
                        onClick={this.onRemoveThisSummon}>
                        ✕
                    </button>
                </td>
            </tr>
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
