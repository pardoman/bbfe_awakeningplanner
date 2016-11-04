import React, { Component } from 'react';

import inventory from './Inventory';

class MyPlanner extends Component {

    constructor(props) {
        super(props);
        this.state = this.getNewStateObject();
        this.onInventoryChange = this.onInventoryChange.bind(this);
    }

    componentDidMount() {
      inventory.addListener( this.onInventoryChange );
    }

    componentWillUnmount() {
      inventory.removeListener( this.onInventoryChange );
    }

    render() {
        var that = this;
        return (
            <div>
                {/*  
                    <img src={stashIcon} />  
                */}
                {that.state.materials.map(function(count, index) {
                    return <input 
                        type="number" 
                        value={count} 
                        key={index}
                        readOnly
                    />;
                })}
            </div>
        );
    };

    getNewStateObject() {
        return {
            materials: inventory.getRequiredMaterials()
        };
    }

    onInventoryChange() {
      this.setState( this.getNewStateObject() );
    }
}

export default MyPlanner;
