import React, { Component } from 'react';
import inventory from './Inventory';
import './table.css';

class MyStash extends Component {

    constructor(props) {
        super(props);
        this.state = this.getNewStateObject();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var newValue = parseInt(event.currentTarget.value, 10);
        if (!Number.isInteger(newValue))
            return;

        // Negatives not allowed
        newValue = Math.max(0, newValue);
        
        var materialId = parseInt(event.currentTarget.getAttribute('data-material-id'), 10);
        if (!Number.isInteger(materialId))
            return;

        inventory.update(materialId, newValue);
        this.setState( this.getNewStateObject() );
    };

    render() {
        var that = this;
        return (
            <tr>
                <td></td>
                {that.state.materials.map(function(mat) {
                    return  <td key={mat.id}>
                                <input 
                                    className="tableCell"
                                    type="number" 
                                    pattern="\d*"
                                    value={mat.value}
                                    data-material-id={mat.id}
                                    onChange={that.handleChange} 
                                />
                            </td>;
                })}
                <td></td>
            </tr>
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
