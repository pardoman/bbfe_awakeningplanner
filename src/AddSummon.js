import React, { Component } from 'react';

import inventory from './Inventory';
import SUMMONS from './Summons';

import './AddSummon.css';

class AddSummon extends Component {
    constructor(props){
        super(props)
        this.onAddSummon = this.onAddSummon.bind(this);
        this.onNevermind = this.onNevermind.bind(this);
        this.onSelection = this.onSelection.bind(this);
        this.state = { adding: false };
    };

    render() {
        var that = this;
        return (
            <div>
                {!that.state.adding &&
                    <button onClick={that.onAddSummon}>
                        Add Summon!
                    </button> 
                }
                {that.state.adding &&
                    <button onClick={that.onNevermind}>
                        Nevermind
                    </button>
                }
                
                <br />
                
                <div className="Choose-Summon-Container" >
                    {that.state.adding && SUMMONS.ALL.map(function(summon){
                        return <div className="Choose-Summon-Option">
                                    <img 
                                        src={summon.src} 
                                        onClick={that.onSelection} 
                                        data-summon-id={summon.id}
                                        key={summon.id}
                                    />
                                </div>
                    })}
                </div>
            </div>
        );
    }

    onAddSummon(event) {
        this.setState({ adding: true });
    }

    onNevermind(event) {
        this.setState({ adding: false });
    }
    
    onSelection(event) {

        var summonId = parseInt(event.currentTarget.getAttribute('data-summon-id'), 10);
        if (!Number.isInteger(summonId))
            return;

        inventory.addSummon( summonId );
        this.setState({ adding: false });
    }
}

export default AddSummon;
