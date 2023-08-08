import { Project } from "src/app/projects/models/project"

export interface Bug {
    id : number,
    title : string,
    isClosed : boolean,
    createdAt : Date,
    projectId : number
}

export type NewBug = Omit<Bug, "id">

export type NewBugOutput = {
    title : string,
    projectId : number
}

// export type BugView = Bug & Project

export type BugView = {
    id : number,
    title : string,
    createdAt : Date,
    isClosed : false,
    name : string,
    projectId : number
}

