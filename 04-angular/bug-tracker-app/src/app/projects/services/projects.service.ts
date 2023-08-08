import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { ProjectsApiService } from './projects-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  public projects : Project[] = [];

  constructor(private projectApi : ProjectsApiService) { }

  load(){
    this.projectApi
      .load()
      .subscribe(projects => this.projects = projects);
  }

  save(projectName : string) {
    const newProjectData = {
      id : 0,
      name : projectName
    }
    this.projectApi
      .save(newProjectData)
      .subscribe(newProject => this.projects = [...this.projects, newProject])
  }
}
