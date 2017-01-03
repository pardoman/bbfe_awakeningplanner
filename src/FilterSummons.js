import React, { Component } from 'react';

import AweConst from './Const';
import inventory from './Inventory';
import SUMMONS from './Summons';

import './FilterSummons.css';

/**
 * Filters the summons that are shown in component <AddSummon />
 */
class FilterSummons extends Component {
    constructor(props){
        super(props)
        this.state = { isOpen: false, filters: [] };
        this.toggleFilterUi = this.toggleFilterUi.bind(this);
        this.onSelection = this.onSelection.bind(this);
        this.onInventoryChange = this.onInventoryChange.bind(this);

        var originData;
        var sameOriginFilterFn = function( summon ) {
            return summon.origin === originData.id;
        };

        // Show origin-filter button only for those that contain units
        this.availableOrigins = [];
        for (var key in AweConst.Origin) {
            if (AweConst.Origin.hasOwnProperty(key)){
                // Check to see if there is at least one unit from this particular origin
                originData = AweConst.Origin[key]; 
                var res = SUMMONS.ALL.filter( sameOriginFilterFn );
                if (res.length > 0) {
                    this.availableOrigins.push( originData );
                }
            }
        }
    };

    componentDidMount() {
      inventory.addListener( this.onInventoryChange, inventory.LISTEN.FILTER );
    }

    componentWillUnmount() {
      inventory.removeListener( this.onInventoryChange, inventory.LISTEN.FILTER );
    }

    render() {
        var that = this;
        // Is the panel open or closed?
        var filterPanelClassName = 'SummonFilterOrigin';
        if (!that.state.isOpen) {
            filterPanelClassName += ' close';
        }
        // Prepare an array to render the filter buttons
        var buttonStates = this.availableOrigins.map( origin => {
            var bActive = (that.state.filters.indexOf(origin.id) !== -1);
            return {
                name: origin.name,
                id: origin.id,
                isActive: bActive
            };
        });
        // Render
        return (
            <div className="SummonFilterContainer">
                <div className="SummonFilterButtonContainer">
                    <button className="SummonFilterButton" onClick={that.toggleFilterUi}>
                        Filter
                    </button>
                </div>
                <div className={filterPanelClassName}>
                    {buttonStates.map(function(origin, index){
                        return <button  key={origin.id} 
                                        className={'SummonFilterOriginButton' + (origin.isActive ? ' active' : '')}
                                        onClick={that.onSelection}
                                        data-origin-id={origin.id} 
                                >{origin.name}</button>
                    })}
                </div>
            </div>
        );
    }

    toggleFilterUi() {
        var bOpen = !this.state.isOpen;
        this.setState({ isOpen: bOpen });
    }

    onSelection(event) {
        
        var originId = parseInt(event.currentTarget.getAttribute('data-origin-id'), 10);
        if (!Number.isInteger(originId))
            return;

        if (inventory.hasFilter(originId)) {
            inventory.removeFilter(originId);
        } else {
            inventory.addFilter(originId, true);
        }
    }

    onInventoryChange() {
        this.setState({ filters: inventory.filters.concat() });
    }

    
}

export default FilterSummons;
