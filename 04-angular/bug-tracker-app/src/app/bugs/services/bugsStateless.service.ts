import { Injectable } from "@angular/core";
import { Bug, NewBug } from "../models/bug";
import { BugOperationService } from "./bugOperation.service";
import { BugApiService } from "./bugApi.service";
import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";

/* Using the BugApi (remote server persistance) */
@Injectable({
    providedIn : 'root'
})
export class BugsStatelessService {

    // private bugsSubject: BehaviorSubject<Bug[]> = new BehaviorSubject<Bug[]>([]);
    private bugsSubject: ReplaySubject<Bug[]> = new ReplaySubject<Bug[]>(1);
    
    private bugs : Bug[] = [];

    public get bugs$() : Subject<Bug[]> {
        return this.bugsSubject;
    }


    constructor(
        private bugOperations: BugOperationService,
        private bugApi : BugApiService
    ) {

    }

    load(): void {
        // populate the bugs from the storage
        this.bugApi
            .getAll()
            .subscribe(bugs => {
                this.bugs = bugs;
                console.table(bugs)
                this.bugsSubject.next(bugs)
            })
    }

    addNew(newBugTitle: string) {
        const newBugData : NewBug = this.bugOperations.createNew(newBugTitle);
        this.bugApi
            .save(newBugData)
            .subscribe(() => {
                this.load()
            })
    }

    remove(bugToRemove: Bug) {
        this.bugApi
            .remove(bugToRemove)
            .subscribe(() => this.load())
        
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
        this.bugApi
            .update(toggledBug)
            .subscribe(() => this.load())

    }
}
