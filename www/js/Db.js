/**
 * @class Db
 *  This class is used to get the data from the cpu.json file
 * 
 */
class Db{
    /**
     * async method to get the data from the json file
     * @param {string} link the path to the json file 
     * @returns 
     */
    static async getDB(link){
        let response = await fetch(link);
         let json =  await response.json();
         return json;
    }
}
export{ Db }
