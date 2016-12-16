import React, { Component } from 'react';

import inventory from './Inventory';
import SUMMONS from './Summons';

import './AddSummon.css';

/**
 * This component shows a list of all the Units that can be awaken to 6 stars.
 */
class AddSummon extends Component {

    domScrollingContainer = null;

    constructor(props){
        super(props)
        this.state = { filters: [] };
        this.onSelection = this.onSelection.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    };

    componentDidMount() {
      inventory.addListener( this.onFilterChange, inventory.LISTEN.FILTER );
    }

    componentWillUnmount() {
      this.domScrollingContainer = null;
      inventory.removeListener( this.onFilterChange, inventory.LISTEN.FILTER );
    }

    render() {
        var that = this;
        var filteredSummons = SUMMONS.ALL.filter((summon)=>{
            // All summons are shown when filter array is empty
            if (that.state.filters.length === 0) {
                return true;
            }
            // Else, check that the origin of the summon is in the filtered array
            return that.state.filters.indexOf(summon.origin) !== -1;
        });
        if (that.domScrollingContainer) {
            that.domScrollingContainer.scrollLeft = 0;
        }
        return (
            <div>
                <div className="Choose-Summon-Container" ref={(theDiv) => { that.domScrollingContainer = theDiv; }}  >
                    {filteredSummons.map(function(summon, index){
                        return <div key={index} className="Choose-Summon-Option" >
                                    <img 
                                        className="Choose-Summon-Option-Img"
                                        src={summon.src}
                                        alt={summon.name}
                                        title={summon.name} 
                                        data-summon-id={summon.id}
                                        onClick={that.onSelection} 
                                    />
                                    <span className="Choose-Summon-Option-Text">
                                        {summon.name}
                                    </span>
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

    onFilterChange() {
        this.setState({ filters: inventory.filters.concat() });
    }
}

export default AddSummon;
