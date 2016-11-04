
import AweConst from './Const';
import SummonData from './Summons';

const STORAGE_PREFIX_AWE_MAT = "inventory-awe-mat-";
const STORAGE_SUMMONS = "inventory-my-summons";

class Inventory {
    
    materials = [];
    summons = [];
    listeners = [];

    update = function(aweMatId, value) {
        // Negatives not allowed
        value = Math.max(0, value);
        this.materials[aweMatId].value = value;
        localStorage.setItem(STORAGE_PREFIX_AWE_MAT + aweMatId, value);
        this.notifyListeners();
    };

    addSummon = function(summonId) {
        this.summons.push(summonId);
        localStorage.setItem(STORAGE_SUMMONS , JSON.stringify(this.summons));
        this.notifyListeners();
    };

    removeSummon = function(summonId) {
        var index = this.summons.indexOf(summonId);
        if (index !== -1) {
            this.summons.splice(index, 1);
            localStorage.setItem(STORAGE_SUMMONS , JSON.stringify(this.summons));
            this.notifyListeners();
        }
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
    addListener = function( listener ) {
        this.listeners.push(listener);
    };

    removeListener = function( listener ) {
        var index = this.listeners.indexOf( listener );
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    };

    notifyListeners = function() {
        this.listeners.forEach(function(listener) {
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
}

export default myInventory;