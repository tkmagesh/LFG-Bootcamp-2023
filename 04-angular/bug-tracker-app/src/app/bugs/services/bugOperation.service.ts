import { Bug } from "../models/bug";

export class BugOperationService{
    createNew(id : number, title : string) : Bug {
        const newBug: Bug = {
            id: id,
            title: title,
            isClosed: false,
            createdAt: new Date()
        }
        return newBug;
    }
    
    toggle(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }
}