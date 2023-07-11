/**
 * @class Cpu
 * represents a cpu
 * @author Charvet Johnny
 */
class Cpu {
    /**
     * @constructor
     * for each property of the json object, we create a property in the class
     * we also create a property fullName which is the concatenation of brand, family and model
     * @param {object} _cpu a single cpu json object  
     */
    constructor(_cpu) {
        Object.assign(this, _cpu);
        this.fullName = this.brand + " " + this.family + " " + this.model;
    }
    /**
     * @method getValues
     * use Object.values to get all the values of the object
     * @returns {array} an array of all the values of the object
     */
    getValues() {
        return Object.values(this);
    }
}
export { Cpu }