import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugOperationService } from "./bugOperation.service";
import { BugStorageService } from "./bugStorage.service";

// When a service expects its dependencies to be injected
@Injectable()
export class BugsService {
    
    public bugs: Bug[] = [];

    constructor(
        private bugOperations: BugOperationService, 
        private bugStorage : BugStorageService
    ) {

    }

    load(): void {

        // populate the bugs from the storage
        this.bugs = this.bugStorage.getAll()
    }

    addNew(newBugTitle: string) {
        //get the max of the id from the bugs array
        const maxBugId = this.bugs.reduce((prevResult, bug) => bug.id > prevResult ? bug.id : prevResult, 0)

        //derive the id of the new bug from maxBugId
        const newBugId = maxBugId + 1

        // create a new bug object
        const newBug = this.bugOperations.createNew(newBugId, newBugTitle)

        // persist the newly created bug in the storage
        this.bugStorage.save(newBug);

        // append the new bug object to the array
        // mutable
        // this.bugs.push(newBug);

        // immutable version of the above
        this.bugs = [...this.bugs, newBug];
    }

    remove(bugToRemove: Bug) {
        // find the index of the bug to remove
        const bugIdxToRemove = this.bugs.indexOf(bugToRemove);

        // remove the bug from the storage
        this.bugStorage.remove(bugToRemove);

        // remove the bug from the array
        // mutation
        this.bugs.splice(bugIdxToRemove, 1)

        // immutable version of the above
        // this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id)
    }

    removeClosed() {
        this.bugs
            .filter(bug => bug.isClosed) // filter all the closed bugs
            .forEach(closedBug => this.remove(closedBug)) // for each closed bug, remove it
    }

    toggle(bugToToggle: Bug) {

        // toggle the 'closed' status of the given bug
        const toggledBug = this.bugOperations.toggle(bugToToggle)

        // persist the changes in the storage
        this.bugStorage.save(bugToToggle);

        // create a new bugs array by replacing the old bug with the toggled bug (immutability)
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
    }
}