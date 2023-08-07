export interface Bug {
    id : number,
    title : string,
    isClosed : boolean,
    createdAt : Date
}

export type NewBug = Omit<Bug, "id">