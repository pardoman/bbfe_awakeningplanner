import React, { Component } from 'react';

import inventory from './Inventory';
import SummonView from './SummonView';

import MyStash from './MyStash';
import AweHeader from './AwaHeader';
import MyPlanner from './MyPlanner';

import './table.css';

class Content extends Component {
    constructor(props){
        super(props)
        this.state = this.getNewStateObject();
        this.onInventoryChange = this.onInventoryChange.bind(this);
    };

    componentDidMount() {
      inventory.addListener( this.onInventoryChange );
    }

    componentWillUnmount() {
      inventory.removeListener( this.onInventoryChange );
    }

    render() {
        var that = this;
        return (
            <tbody>

                {that.state.summons.map(function(id, index) {
                      var summonKey = that.state.summonKeys[index];
                      return <SummonView summonId={id} key={summonKey} summonKey={summonKey} />;
                })}

                <MyStash />
                <AweHeader />
                <MyPlanner />
            
            </tbody>
        );
    };

    getNewStateObject() {
      return { 
        summons: inventory.summons.concat(), 
        summonKeys: inventory.summonKeys.concat()  
      };
    }

    onInventoryChange() {
      this.setState( this.getNewStateObject() );
    }

}

export default Content;
