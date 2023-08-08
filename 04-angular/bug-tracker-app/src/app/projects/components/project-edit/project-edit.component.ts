import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent {
  newProjectName: string = ''
  
  @Output()
  projectCreated : EventEmitter<string> = new EventEmitter<string>();

  onBtnAddClick() {
    this.projectCreated.emit(this.newProjectName);
  }

}
