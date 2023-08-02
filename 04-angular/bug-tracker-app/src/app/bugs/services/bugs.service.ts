import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugOperationService } from "./bugOperation.service";

// When a service expects its dependencies to be injected
@Injectable()
export class BugsService {
    
    // initialize the bugs array with dummy data to start with
    bugs: Bug[] = [
        /* 
        { id: 1, title: 'Server communcation failure', isClosed: false, createdAt: new Date(2023,6,1) },
        { id: 2, title: 'User access denied', isClosed: true, createdAt: new Date(2023, 4, 1) },
        { id: 3, title: 'Application not responding', isClosed: false, createdAt: new Date(2023, 5, 1) }, 
        */
    ];

    constructor(private bugOperations: BugOperationService) {

    }

    addNew(newBugTitle: string) {
        //get the max of the id from the bugs array
        const maxBugId = this.bugs.reduce((prevResult, bug) => bug.id > prevResult ? bug.id : prevResult, 0)

        //derive the id of the new bug from maxBugId
        const newBugId = maxBugId + 1

        // create a new bug object
        const newBug = this.bugOperations.createNew(newBugId, newBugTitle)

        // append the new bug object to the array
        this.bugs.push(newBug);
    }

    remove(bugToRemove: Bug) {
        // find the index of the bug to remove
        const bugIdxToRemove = this.bugs.indexOf(bugToRemove);

        // remove the bug from the array
        this.bugs.splice(bugIdxToRemove, 1)
    }

    removeClosed() {
        this.bugs = this.bugs.filter(bug => !bug.isClosed)
    }

    toggle(bugToToggle: Bug) {
        this.bugOperations.toggle(bugToToggle)
    }
}