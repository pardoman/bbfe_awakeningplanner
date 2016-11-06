import React, { Component } from 'react';

import inventory from './Inventory';
import SUMMONS from './Summons';

import './AddSummon.css';

class AddSummon extends Component {
    constructor(props){
        super(props)
        this.onSelection = this.onSelection.bind(this);
    };

    render() {
        var that = this;
        return (
            <div>
                <div className="Choose-Summon-Container" >
                    {SUMMONS.ALL.map(function(summon, index){
                        return <div key={index} className="Choose-Summon-Option" >
                                    <img 
                                        src={summon.src} 
                                        alt={summon.name}
                                        data-summon-id={summon.id}
                                        onClick={that.onSelection} 
                                    />
                                </div>
                    })}
                </div>
            </div>
        );
    }
    
    onSelection(event) {

        var summonId = parseInt(event.currentTarget.getAttribute('data-summon-id'), 10);
        if (!Number.isInteger(summonId))
            return;

        inventory.addSummon( summonId );
    }
}

export default AddSummon;
