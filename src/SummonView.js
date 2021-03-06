import React, { Component } from 'react';

import AweConst from './Const';
import inventory from './Inventory';
import SummonData from './Summons';

import './SummonView.css';
import './table.css';


class SummonView extends Component {
    
    constructor(props){
        super(props)
        this.state = { 
            summonId: props.summonId, 
            summonKey: props.summonKey,
            inventoryMats: inventory.getMaterials(),
            awakeningMode: inventory.isAwakeningMode()
        };
        this.onAwakeThisUnit = this.onAwakeThisUnit.bind(this);
        this.onRemoveThisSummon = this.onRemoveThisSummon.bind(this);
        this.onMaterialChange = this.onMaterialChange.bind(this);
        this.onAwakeningModeChange = this.onAwakeningModeChange.bind(this);
    };

    componentDidMount() {
        inventory.addListener( this.onMaterialChange, inventory.LISTEN.MATS );
        inventory.addListener( this.onAwakeningModeChange, inventory.LISTEN.AWAKENING_MODE );
    }

    componentWillUnmount() {
        inventory.removeListener( this.onMaterialChange, inventory.LISTEN.MATS );
        inventory.removeListener( this.onAwakeningModeChange, inventory.LISTEN.AWAKENING_MODE );
    }

    render() {
        var summonData = this.getSummonData(this.state.summonId);
        var isAwakeningMode = this.state.awakeningMode;
        var canAwake = isAwakeningMode && inventory.canAwakeUnit(this.state.summonId);

        var rowClassName = '';
        if (isAwakeningMode && !canAwake) {
            rowClassName = 'unit-cant-awake';
        }
        
        const inventoryMats = this.state.inventoryMats;

        return (
            <tr className={rowClassName}>
                <td>
                    <a href={summonData.wiki} target="blank">
                        <img src={summonData.src} className="tableCellImage" alt={summonData.name} title={summonData.name} />
                    </a> 
                </td>
                {/* CASE 1 - Just display the materials this unit requires to awake */}
                {!canAwake && summonData.materials.map(function(matCount, index) {
                    return <td key={index}>
                                <input
                                    className={"tableCell" + (inventoryMats[index] < matCount ? ' mat-missing' : '')}
                                    value={matCount}
                                    readOnly
                                />
                                <img src={AweConst.materials[index].src} className="background-material-icon" />
                            </td>;
                })}
                {/* CASE 2 - Display a big button to awake this unit! */}
                {canAwake && <td colSpan="6">
                                <button 
                                    className="awake-this-unit"
                                    onClick={this.onAwakeThisUnit}
                                >
                                    Awaken {summonData.name}
                                </button>
                             </td>}
                <td>
                    {isAwakeningMode &&  canAwake && <span className="Button-Action can-awake">✓</span>}
                    {isAwakeningMode && !canAwake && <span className="Button-Action cannot-awake">✕</span>}
                    {!isAwakeningMode && <button 
                                            className="Button-Action" 
                                            onClick={this.onRemoveThisSummon}>
                                            ✖
                                        </button>}
                </td>
            </tr>
        );
    }

    onAwakeThisUnit() {
        inventory.toggleAwakeningMode();
        inventory.awakeUnit(this.state.summonId, this.state.summonKey);
        inventory.setAwakeUnitAnim(this.state.summonId);
    }

    onRemoveThisSummon() {
        inventory.removeSummon( this.state.summonId, this.state.summonKey );
    }

    onMaterialChange() {
        this.setState({ inventoryMats: inventory.getMaterials() });
    }

    onAwakeningModeChange() {
        this.setState({ awakeningMode: inventory.isAwakeningMode() });
    }

    getNewStateObject() {
      return { summons: inventory.summons.concat() };
    }

    getSummonData(summonId) {
        return SummonData[summonId];
    }
}

export default SummonView;
