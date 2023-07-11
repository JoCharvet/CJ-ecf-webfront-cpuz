import { CpuCollection } from "./cpuCollection.js";
import { GenerateTbody } from "./GenerateTbody.js";


// instantiates a new CpuCollection object
let cpuCollection = new CpuCollection();
// loads the cpus from the json file
await cpuCollection.loadCpu();

// instantiates a new GenerateTbody object
let generateTbody = new GenerateTbody(cpuCollection);
// generates the tbody of the table
generateTbody.generateTbody();

// adds an event listener to the search input
document.getElementById("search").addEventListener("input", (e) => {
    generateTbody.generateTbody(cpuCollection.searchCpu( e.target.value));
});
// adds an event listener to the sort button
document.getElementById("sortPrice").addEventListener("click", () => {
    generateTbody.generateTbody(cpuCollection.sortByPrice());
});
