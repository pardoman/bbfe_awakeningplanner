
import AweConst from './Const';

const STORAGE_PREFIX_AWE_MAT = "inventory-awe-mat-";
const STORAGE_SUMMONS = "inventory-my-summons";

class Inventory {
    
    materials = [];
    summons = [];

    update = function(aweMatId, value) {
        // Negatives not allowed
        value = Math.max(0, value);
        this.materials[aweMatId].value = value;
        localStorage.setItem(STORAGE_PREFIX_AWE_MAT + aweMatId, value);
    };

    addSummon = function(summonId) {
        this.summons.push(summonId);
        localStorage.setItem(STORAGE_SUMMONS , JSON.stringify(this.summons));
    };

    removeSummon = function(summonId) {
        var index = this.summons.indexOf(summonId);
        if (index !== -1) {
            this.summons.splice(index, 1);
            localStorage.setItem(STORAGE_SUMMONS , JSON.stringify(this.summons));
        }
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
    myInventory.summons = loadedSummons;
}

export default myInventory;