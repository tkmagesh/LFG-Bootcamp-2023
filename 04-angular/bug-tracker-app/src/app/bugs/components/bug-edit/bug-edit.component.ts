import { Component, EventEmitter, Output } from '@angular/core';
import { BugsService } from '../../services/bugs.service';

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
  onNewBug : EventEmitter<string> = new EventEmitter<string>()
  
  onBtnAddNewClick(){
    this.onNewBug.emit(this.newBugTitle)
  }
  
}
