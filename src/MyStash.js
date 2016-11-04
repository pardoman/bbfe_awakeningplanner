import React, { Component } from 'react';
import stashIcon from './images/items.png';

import inventory from './Inventory';

class MyStash extends Component {

    constructor(props) {
        super(props);
        this.state = this.getNewStateObject();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var newValue = parseInt(event.currentTarget.value);
        if (!Number.isInteger(newValue))
            return;

        // Negatives not allowed
        newValue = Math.max(0, newValue);
        
        var materialId = parseInt(event.currentTarget.getAttribute('data-material-id'));
        if (!Number.isInteger(materialId))
            return;

        inventory.update(materialId, newValue);
        this.setState( this.getNewStateObject() );
    };

    render() {
        var that = this;
        return (
            <div>
                {/*  
                    <img src={stashIcon} />  
                */}
                {that.state.materials.map(function(mat) {
                    return <input 
                        type="number" 
                        value={mat.value} 
                        key={mat.id}
                        data-material-id={mat.id}
                        onChange={that.handleChange} 
                    />;
                })}
            </div>
        );
    };

    getNewStateObject() {
        var matCopy = inventory.materials.map(function(mat){
            return {
                id: mat.id,
                value: mat.value
            }
        });

        return {
            materials: matCopy
        };
    }
}

export default MyStash;
