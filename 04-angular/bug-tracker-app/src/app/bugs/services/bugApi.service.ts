
import { HttpClient } from "@angular/common/http"; /* API for server communication */
import { Injectable } from "@angular/core";
import { Bug, NewBug } from "../models/bug";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class BugApiService {

    private endPoint = 'http://localhost:3000/bugs';

    constructor(private httpClient : HttpClient){

    }

    getAll() : Observable<Bug[]>{
        const bugs$ = this.httpClient
            .get<Bug[]>(this.endPoint);
        return bugs$;
    }

    get(id : number) : Observable<Bug>{
        return this.httpClient
            .get<Bug>(`${this.endPoint}/${id}`)
    }

    save(newBugData : NewBug) : Observable<Bug> {
        return this.httpClient
            .post<Bug>(this.endPoint, newBugData)
    }

    update(bugToUpdate : Bug) : Observable<Bug> {
        return this.httpClient
            .put<Bug>(`${this.endPoint}/${bugToUpdate.id}`, bugToUpdate)
    }

    remove(bugToRemove : Bug) : Observable<any> {
        return this.httpClient
            .delete<any>(`${this.endPoint}/${bugToRemove.id}`)
    }
}