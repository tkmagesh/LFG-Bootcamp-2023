import { Bug, NewBug } from "../models/bug";

export class BugOperationService{
   /* 
    createNew(id : number, title : string) : Bug {
        const newBug: Bug = {
            id: id,
            title: title,
            isClosed: false,
            createdAt: new Date()
        }
        return newBug;
    } */

    createNew(title: string): NewBug {
        const newBug: NewBug = {
            title: title,
            isClosed: false,
            createdAt: new Date()
        }
        return newBug;
    }
    
    toggle(bugToToggle : Bug) : Bug {
        // mutable
        // bugToToggle.isClosed = !bugToToggle.isClosed;

        // immutable version of the above
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed }
        return toggledBug;
    }
}