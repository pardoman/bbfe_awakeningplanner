
import AweConst from './Const';
import SummonData from './Summons';

const STORAGE_PREFIX_AWE_MAT = "inventory-awe-mat-";
const STORAGE_SUMMONS = "inventory-my-summons";

var nextSummonInventoryId = 1; // Stupid React and their fucking Component keys

class Inventory {
    
    materials = [];
    summons = [];
    summonKeys = []; // runtime bookeeping array. No need to persist. I need this because React.
    filters = [];    // runtime filtering of which summons to choose from.
    listeners = {};

    LISTEN = {
        SUMMON: 'LISTEN_SUMMON',
        MATS:   'LISTEN_MATS',
        FILTER: 'LISTEN_FILTER',
    };

    //material
    update = function(aweMatId, value) {
        // Negatives not allowed
        value = Math.max(0, value);
        this.materials[aweMatId].value = value;
        localStorage.setItem(STORAGE_PREFIX_AWE_MAT + aweMatId, value);
        this.notifyListeners(this.LISTEN.MATS);
    };

    //summon
    addSummon = function(summonId) {
        this.summons.unshift(summonId);
        this.summonKeys.unshift(nextSummonInventoryId++);
        localStorage.setItem(STORAGE_SUMMONS , JSON.stringify(this.summons));
        this.notifyListeners(this.LISTEN.SUMMON);
    };

    //summon
    removeSummon = function(summonId, summonKey) {
        var index;
        if (summonKey) {
            index = this.summonKeys.indexOf(summonKey);
        }
        if (index === -1) {
            index = this.summons.indexOf(summonId);
        }
        if (index !== -1) {
            this.summons.splice(index, 1);
            this.summonKeys.splice(index, 1);
            localStorage.setItem(STORAGE_SUMMONS , JSON.stringify(this.summons));
            this.notifyListeners(this.LISTEN.SUMMON);
        }
    };

    addFilter = function(originId, removeAll) {
        var index = this.filters.indexOf(originId);
        if (index !== -1) {
            return;
        }
        if (removeAll) {
            this.filters.splice(0);
        }
        this.filters.push( originId );
        this.notifyListeners(this.LISTEN.FILTER);
    };

    removeFilter = function(originId) {
        var index = this.filters.indexOf(originId);
        if (index === -1) {
            return;
        }
        this.filters.splice(index, 1);
        this.notifyListeners(this.LISTEN.FILTER);
    };

    removeAllFilters = function() {
        if (this.filters.length > 0) {
            this.filters.splice(0);
            this.notifyListeners(this.LISTEN.FILTER);   
        }
    }

    hasFilter = function(originId) {
        return this.filters.indexOf(originId) !== -1;
    };

    // Calculate needed materials based on inventory and summons needed to awaken
    getRequiredMaterials = function() {
        
        var ret = [0,0,0,0,0,0];
        
        // Gather required materials based on summons to awaken
        this.summons.forEach(function(summonId){
            var data = SummonData[summonId];
            // Manual loop-unrolling, lol
            ret[0] += data.materials[0];
            ret[1] += data.materials[1];
            ret[2] += data.materials[2];
            ret[3] += data.materials[3];
            ret[4] += data.materials[4];
            ret[5] += data.materials[5];
        });

        // Now substract materials we already have
        ret[0] -= this.materials[0].value;
        ret[1] -= this.materials[1].value;
        ret[2] -= this.materials[2].value;
        ret[3] -= this.materials[3].value;
        ret[4] -= this.materials[4].value;
        ret[5] -= this.materials[5].value;

        // Negative values are fine. It means we have a surpluse in materials
        return ret;
    };

    // TODO: Change and use proper event listeners
    addListener = function( listener, listenType ) {
        var group = this.listeners[listenType];
        if (!Array.isArray(group)) {
            group = this.listeners[listenType] = [];
        }
        group.push(listener);
    };

    removeListener = function( listener, listenType ) {
        var group = this.listeners[listenType];
        if (!Array.isArray(group)) {
            return;
        }
        var index = group.indexOf( listener );
        if (index !== -1) {
            group.splice(index, 1);
        }
    };

    notifyListeners = function(listenType) {
        var group = this.listeners[listenType];
        if (!Array.isArray(group)) {
            return;
        }
        group.forEach(function(listener) {
            listener();
        });
    };
}

var myInventory = new Inventory();

// Load materials from localStorage
AweConst.materials.forEach(function(mat){
    var value = localStorage.getItem(STORAGE_PREFIX_AWE_MAT + mat.id) || 0;
    myInventory.materials[mat.id] = {
        id: mat.id
        // value: value // Value gets set in the update() method below
    };
    // Also save it back to localStorage
    myInventory.update(mat.id, value);
});

// Load my summons
var loadedSummons = localStorage.getItem(STORAGE_SUMMONS);
if (loadedSummons) {
    myInventory.summons = JSON.parse(loadedSummons);
    myInventory.summonKeys = myInventory.summons.map(function(){
        return nextSummonInventoryId++;
    });
}

export default myInventory;