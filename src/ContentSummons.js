import React, { Component } from 'react';

import inventory from './Inventory';
import SummonView from './SummonView';
import AweHeader from './AwaHeader';

import './table.css';
import './ContentSummons.css';
import rarity6 from './images/Rarity-6.png';

/**
 * Shows all the units the user has chosen to awake to 6 stars
 */
class ContentSummons extends Component {
    constructor(props){
        super(props)
        this.state = this.getNewStateObject();
        this.onInventoryChange = this.onInventoryChange.bind(this);
        this.toggleAwakeningMode = this.toggleAwakeningMode.bind(this);
    };

    componentDidMount() {
      inventory.addListener( this.onInventoryChange, inventory.LISTEN.SUMMON );
      inventory.addListener( this.onInventoryChange, inventory.LISTEN.MATS );
      inventory.addListener( this.onInventoryChange, inventory.LISTEN.AWAKENING_MODE );
    }

    componentWillUnmount() {
      inventory.removeListener( this.onInventoryChange, inventory.LISTEN.SUMMON );
      inventory.removeListener( this.onInventoryChange, inventory.LISTEN.MATS );
      inventory.removeListener( this.onInventoryChange, inventory.LISTEN.AWAKENING_MODE );
    }

    render() {
        var that = this;
        var summonCount = that.state.summons.length;
        var hasSummons = (summonCount > 0); 
        var canAwake = hasSummons && (inventory.getUnitsThatCanBeAwaken().length > 0);
        var awakeningMode = this.state.isAwakeningMode;
        return (
            <tbody>

                {/* Header */}
                <tr>
                    <td></td>
                    {hasSummons &&
                        <td colSpan="6">Your summons ({summonCount})</td>
                    }
                    {!hasSummons &&
                        <td colSpan="6">Add the summons you want to awaken!</td>
                    }
                </tr>

                {/* Display all the chosen unites */}
                {that.state.summons.map(function(id, index) {
                      var summonKey = that.state.summonKeys[index];
                      return <SummonView 
                                summonId={id} 
                                key={summonKey} 
                                summonKey={summonKey}
                            />;
                })}
                {hasSummons && <AweHeader />}

                {/* The Awakening button */}
                {hasSummons && 
                    <tr>
                        <td colSpan="8">
                            <button 
                                onClick={this.toggleAwakeningMode}
                                className={'AwakeUnitButton' + (canAwake ? ' enabled' : '')}
                            >
                                {canAwake && !awakeningMode && <img src={rarity6} alt="6start" />}
                                {canAwake && !awakeningMode && <img src={rarity6} alt="6start" />}
                                {canAwake && !awakeningMode && <img src={rarity6} alt="6start" />}
                                {canAwake ? ( awakeningMode ? 'Cancel Awakening' : ' Awake! ') 
                                          : 'Not enough materials to awake a unit'}
                                {canAwake && !awakeningMode && <img src={rarity6} alt="6start" />}
                                {canAwake && !awakeningMode && <img src={rarity6} alt="6start" />}
                                {canAwake && !awakeningMode && <img src={rarity6} alt="6start" />}
                            </button>
                        </td>
                    </tr>}
            </tbody>
        );
    };

    getNewStateObject() {
      return { 
        isAwakeningMode: inventory.isAwakeningMode(),
        summons: inventory.summons.concat(), 
        summonKeys: inventory.summonKeys.concat()
      };
    }

    onInventoryChange() {
      this.setState( this.getNewStateObject() );
    }

    toggleAwakeningMode() {
        if (inventory.getUnitsThatCanBeAwaken().length > 0) {
            inventory.toggleAwakeningMode();
        }
    }

}

export default ContentSummons;
