import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/projects/models/project';
import { NewBugOutput } from '../../models/bug';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent {
  newBugTitle: string = '';

  // the below is not advisable
  /* 
  constructor(private bugsService : BugsService){
    
  }
  onBtnAddNewClick() {
    this.bugsService.addNew(this.newBugTitle)
  } 
  */

  @Output()
  onNewBug: EventEmitter<NewBugOutput> = new EventEmitter<NewBugOutput>()
  
  @Input('projects')
  projects : Project[] = []
  
  selectedProjectId : string = '';

  onBtnAddNewClick(){
    const newBug : NewBugOutput = {
      title : this.newBugTitle,
      projectId : parseInt(this.selectedProjectId)
    }
    this.onNewBug.emit(newBug)
  }
  
}
