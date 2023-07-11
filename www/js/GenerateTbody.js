/**
 * @class GenerateTbody
 * Class that generates the tbody of the table
 * @param {CpuCollection} _cpus the cpuCollection object 
 * @author Charvet Johnny
 */
class GenerateTbody{
    /**
     * @constructor
     * @param {CpuCollection} _cpus the cpuCollection object
     * @param {HTMLElement} _tbody the tbody of the table
     * @param {HTMLElement} _totalcpu the span that shows the total of cpus
     */
    constructor(_cpus){
        this.cpuCollection = _cpus;
        this.tbody = document.getElementById("tBodyCpu");
        this.totalcpu = document.getElementById("totalCpu");
      
    }
    /**
     * @method generateTbody
     * generates the tbody of the table
     * if the parameter is not passed, it uses the cpus property of the cpuCollection object
     * else it uses the parameter
     * @param {array[CPU]} _table 
     */
    generateTbody(_table = this.cpuCollection.cpus) {
        if(document.getElementById("search"))
        {
            _table = this.cpuCollection.searchCpu(document.getElementById("search").value);
        }
        this.tbody.innerHTML = "";
        _table.forEach(cpu => {
            let tr = document.createElement("tr");
            cpu.getValues().forEach(value => {
                let td = document.createElement("td");
                td.innerText = value;
                tr.appendChild(td);
            });
            this.tbody.appendChild(tr);
        });
        this.totalcpu.innerText = _table.length;   
    }   
}
export { GenerateTbody }