import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";

@Injectable({
    providedIn : 'root' // register in the module (instead of registering manually in the 'provider')
})
export class BugStorageService {
    private _storage : Storage = window.localStorage;
    private _slug : string = 'bug$'

    //method to load all the bugs from the storage
    getAll() : Bug[] {
        const result : Bug[] = [];
        for(let idx = 0; idx < this._storage.length; idx++){
            //get the key at idx
            const key = this._storage.key(idx);

            //verify if the key belongs to a bug data
            if (key?.startsWith(this._slug)){

                // get the the JSON stringified version of the data from the storage
                const rawData = this._storage.getItem(key);

                // deserialize the rawData to a JS object
                if (rawData){
                    const bug = JSON.parse(rawData)
                    result.push(bug)
                }
            }

        }
        return result;
    }

    //method for saving new bugs and updating existing bugs
    save(bugData : Bug) : void {
        // to differentiate the bug data from other data in the storage
        const newKey = `${this._slug}-${bugData.id}`

        // JSON serialized verion of the bug object for persistance
        const newValue = JSON.stringify(bugData)

        //save the data in the storage
        this._storage.setItem(newKey, newValue)
    }

    //method for removing a bug
    remove(bugData : Bug) : void {

        // construct the key to remove from the storage
        const keyToRemove = `${this._slug}-${bugData.id}`

        // remove the item from the storage
        this._storage.removeItem(keyToRemove);
    }


}