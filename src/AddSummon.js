import React, { Component } from 'react';

import inventory from './Inventory';
import Summon from './Summon';

class AddSummon extends Component {
    constructor(props){
        super(props)
        this.onAddSummon = this.onAddSummon.bind(this);
    };

    render() {
        var that = this;
        return (
            <div>
                <button onClick={that.onAddSummon}>
                    Add Summon!
                </button>
            </div>
        );
    }

    onAddSummon(event) {
      inventory.addSummon( Summon.getRandomSummonId() );
    }
}

export default AddSummon;
