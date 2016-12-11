import React, { Component } from 'react';

import AweConst from './Const';
import './FilterSummons.css';


class FilterSummons extends Component {
    constructor(props){
        super(props)
        this.state = { isOpen: false, filters: [] };
        this.toggleFilterUi = this.toggleFilterUi.bind(this);
        this.onSelection = this.onSelection.bind(this);

        this.allOrigins = [];
        for (var key in AweConst.Origin) {
            if (AweConst.Origin.hasOwnProperty(key)){
                this.allOrigins.push( AweConst.Origin[key] );
            }
        }
    };

    render() {
        var that = this;
        // Is the panel open or closed?
        var filterPanelClassName = 'SummonFilterOrigin';
        if (!that.state.isOpen) {
            filterPanelClassName += ' close';
        }
        // Prepare an array to render the filter buttons
        var buttonStates = this.allOrigins.map( origin => {
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
        this.setState({ isOpen: !this.state.isOpen });
    }

    onSelection(event) {
        
        var originId = parseInt(event.currentTarget.getAttribute('data-origin-id'), 10);
        if (!Number.isInteger(originId))
            return;

        var newFilters = this.state.filters.concat();
        var index = newFilters.indexOf(originId);
        if (index === -1) {
            newFilters.push( originId );
        } else {
            newFilters.splice(index, 1);
        }
        this.setState({ filters: newFilters });
    }
    
}

export default FilterSummons;
