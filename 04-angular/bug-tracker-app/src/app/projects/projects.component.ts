import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(public projectsService : ProjectsService){

  }
  ngOnInit(): void {
    this.projectsService.load()
  }

  onNewProjectCreated(newProjectName : string){
    this.projectsService.save(newProjectName);
  }
}
