import { Component, OnInit } from "@angular/core";
import { Bug } from "./models/bug";
import { BugOperationService } from "./services/bugOperation.service";
import { BugsService } from "./services/bugs.service";
import { SortParams } from "./components/bug-sort/bug-sort.component";

@Component({
    selector: 'app-bugs',
    templateUrl: 'bugs.component.html',
    styleUrls: ['bugs.component.css']
})
export class BugsComponent implements OnInit {
    
    sortAttr : string = '';
    sortDesc : boolean = false;

    showHeader : boolean = true;
    

    constructor(public bugsService: BugsService) {
        console.log('bugsComponent - instance created')
    }

    // lifecycle method invoked when the component is initialized
    ngOnInit(): void {
        console.log('bugsComponent - initialized')
        this.bugsService.load()
    }

    // event handler for the onNewBug event (bug-edit component)
    onNewBugCreate(newBugTitle : string){
        this.bugsService.addNew(newBugTitle)
    }

    // event handler for the bug-sort component
    onSortChange(sortData : SortParams){
        this.sortAttr = sortData.attrName;
        this.sortDesc = sortData.isDesc;
    }

    getClosedCount(): number {
        console.log('getClosedCount triggered')
        return this.bugsService.bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0)
    }
}

// before introducing bugsService
/*
export class BugsComponent {

    // initialize the bugs array with dummy data to start with
    bugs: Bug[] = [
        { id: 1, title: 'Server communcation failure', isClosed: false, createdAt: new Date() },
        { id: 2, title: 'User access denied', isClosed: true, createdAt: new Date() },
        { id: 3, title: 'Application not responding', isClosed: false, createdAt: new Date() },
    ];

    constructor(private bugOperations : BugOperationService){

    }

    onBtnAddNewClick(newBugTitle: string) {
        //get the max of the id from the bugs array
        const maxBugId = this.bugs.reduce((prevResult, bug) => bug.id > prevResult ? bug.id : prevResult, 0)

        //derive the id of the new bug from maxBugId
        const newBugId = maxBugId + 1

        // create a new bug object
        const newBug = this.bugOperations.createNew(newBugId, newBugTitle)

        // append the new bug object to the array
        this.bugs.push(newBug);
    }

    onBtnRemoveClick(bugToRemove: Bug) {
        // find the index of the bug to remove
        const bugIdxToRemove = this.bugs.indexOf(bugToRemove);

        // remove the bug from the array
        this.bugs.splice(bugIdxToRemove, 1)
    }

    onBugTitleClick(bugToToggle: Bug) {
        // toggle the 'closed' status of the give bug
        this.bugOperations.toggle(bugToToggle)
    }

    onBtnRemoveClosedClick() {

        // instead of removing closed bugs, we are retaining only open bugs
        this.bugs = this.bugs.filter(bug => !bug.isClosed)


        // for(let idx = this.bugs.length-1; idx >= 0; idx--){
        //     if (this.bugs[idx].isClosed)
        //         this.bugs.splice(idx, 1)
        // }

    }

    getClosedCount(): number {
        return this.bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0)
    }
} */

// before introducing bugOperations service
/* 
export class BugsComponent {
    
    // initialize the bugs array with dummy data to start with
    bugs: Bug[] = [
        { id: 1, title: 'Server communcation failure', isClosed: false, createdAt: new Date() },
        { id: 2, title: 'User access denied', isClosed: true, createdAt: new Date() },
        { id: 3, title: 'Application not responding', isClosed: false, createdAt: new Date() },
    ];

    onBtnAddNewClick(newBugTitle: string) {
        //get the max of the id from the bugs array
        const maxBugId = this.bugs.reduce((prevResult, bug) => bug.id > prevResult ? bug.id : prevResult, 0)

        //derive the id of the new bug from maxBugId
        const newBugId = maxBugId + 1

        // create a new bug object
        const newBug: Bug = {
            id: newBugId,
            title: newBugTitle,
            isClosed: false,
            createdAt: new Date()
        }

        // append the new bug object to the array
        this.bugs.push(newBug);
    }

    onBtnRemoveClick(bugToRemove: Bug) {
        // find the index of the bug to remove
        const bugIdxToRemove = this.bugs.indexOf(bugToRemove);

        // remove the bug from the array
        this.bugs.splice(bugIdxToRemove, 1)
    }

    onBugTitleClick(bugToToggle: Bug) {
        // toggle the 'closed' status of the give bug
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }

    onBtnRemoveClosedClick() {

        // instead of removing closed bugs, we are retaining only open bugs
        this.bugs = this.bugs.filter(bug => !bug.isClosed)

        
        // for(let idx = this.bugs.length-1; idx >= 0; idx--){
        //     if (this.bugs[idx].isClosed)
        //         this.bugs.splice(idx, 1)
        // } 
       
    }

    getClosedCount() : number {
        return this.bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0)
    }
}
 */