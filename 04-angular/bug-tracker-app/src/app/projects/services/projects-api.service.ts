import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsApiService {
  private endpoint = 'http://localhost:3000/projects';

  constructor(
    private httpClient : HttpClient
  ) { 

  }

  load() : Observable<Project[]> {
    return this.httpClient
      .get<Project[]>(this.endpoint)  
  }

  save(projectData : Project) : Observable<Project>{
    return this.httpClient
      .post<Project>(this.endpoint, projectData)
  }
}
