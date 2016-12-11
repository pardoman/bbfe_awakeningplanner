import React, { Component } from 'react';

import inventory from './Inventory';
import SummonView from './SummonView';
import AweHeader from './AwaHeader';

import './table.css';

/**
 * Shows all the units the user has chosen to awake to 6 stars
 */
class ContentSummons extends Component {
    constructor(props){
        super(props)
        this.state = this.getNewStateObject();
        this.onInventoryChange = this.onInventoryChange.bind(this);
    };

    componentDidMount() {
      inventory.addListener( this.onInventoryChange, inventory.LISTEN.SUMMON );
    }

    componentWillUnmount() {
      inventory.removeListener( this.onInventoryChange, inventory.LISTEN.SUMMON );
    }

    render() {
        var that = this;
        var summonCount = that.state.summons.length;
        var hasSummons = (summonCount > 0); 
        return (
            <tbody>
                <tr>
                    <td></td>
                    {hasSummons &&
                        <td colSpan="6">Your summons ({summonCount})</td>
                    }
                    {!hasSummons &&
                        <td colSpan="6">Add the summons you want to awaken!</td>
                    }
                </tr>
                {that.state.summons.map(function(id, index) {
                      var summonKey = that.state.summonKeys[index];
                      return <SummonView summonId={id} key={summonKey} summonKey={summonKey} />;
                })}
                {hasSummons && <AweHeader />}
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

export default ContentSummons;
