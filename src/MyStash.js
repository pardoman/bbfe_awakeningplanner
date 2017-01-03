import React, { Component } from 'react';
import inventory from './Inventory';
import './table.css';

class MyStash extends Component {

    constructor(props) {
        super(props);
        this.state = this.getNewStateObject();
        this.handleChange = this.handleChange.bind(this);
        this.onMaterialChange = this.onMaterialChange.bind(this);
    }

    componentDidMount() {
        inventory.addListener( this.onMaterialChange, inventory.LISTEN.MATS );
    }

    componentWillUnmount() {
        inventory.removeListener( this.onMaterialChange, inventory.LISTEN.MATS );
    }

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

    handleChange(event) {

        event.preventDefault();

        var strValue = event.currentTarget.value;
        if (!strValue) {
            strValue = '0';
        }
        var newValue = parseInt(strValue, 10);
        if (!Number.isInteger(newValue))
            return;

        // Negatives not allowed
        newValue = Math.max(0, newValue);
        
        var materialId = parseInt(event.currentTarget.getAttribute('data-material-id'), 10);
        if (!Number.isInteger(materialId))
            return;

        inventory.update(materialId, newValue);
    }

    onMaterialChange() {
        this.setState( this.getNewStateObject() );
    }

}

export default MyStash;
