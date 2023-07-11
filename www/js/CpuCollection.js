import {Cpu} from './cpu.js';
import { Db } from './Db.js';

/**
 * @class CpuCollection
 * represents a collection of cpus
 */
class CpuCollection {
    /**
     * @constructor
     * creates an empty array of cpus
     * creates a boolean to know if the array is sorted by price
     */
    constructor() {
        this.cpus = [];
        this.sortedByPrice = false;
    }
    /**
     * @method loadCpu
     * loads the cpus from the json file
     * creates a new Cpu object for each cpu in the json file
     * @returns {array} an array of Cpu objects
     */
    async loadCpu() {
        let temp= await Db.getDB("./cpuz.json");
        console.log(temp);
        this.cpus = temp.map(cpu => new Cpu(cpu));    
    }

    /**
     * @method searchCpu
     * filters the cpus array to get the cpus that contains the search string in their fullName property
     * @param {string} search the string to compare in the fullName property of the cpu
     * @returns 
     */
    searchCpu(search) {  
        return search === "" ? this.cpus : this.cpus.filter(cpu => cpu.fullName.toLowerCase().includes(search.toLowerCase()));
    }

    /**
     * @method sortByPrice
     * sorts the cpus array by price (ascending or descending)
     * @returns {array} the sorted array
     */
    sortByPrice() {
        this.sortedByPrice = !this.sortedByPrice;
         this.sortedByPrice ? this.cpus.sort((a, b) => a.price - b.price) : this.cpus.reverse();
    }
}

export { CpuCollection }