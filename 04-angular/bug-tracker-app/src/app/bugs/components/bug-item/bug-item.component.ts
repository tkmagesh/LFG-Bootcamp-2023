import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bug } from '../../models/bug';

@Component({
  selector: 'app-bug-item',
  templateUrl: './bug-item.component.html',
  styleUrls: ['./bug-item.component.css']
})
export class BugItemComponent {
  
  // receive the "bug" to be displayed as input
  @Input('data')
  bug!: Bug;

  @Output()
  toggle : EventEmitter<Bug> = new EventEmitter<Bug>()

  @Output()
  remove : EventEmitter<Bug> = new EventEmitter<Bug>()

  onBtnRemoveClick(bugToRemove: Bug) {
    // emit the "remove" event so that the parent component can be notified 
    this.remove.emit(bugToRemove);
  }

  onBugTitleClick(bugToToggle: Bug) {
    // emit the "toggle" event so that the parent component can be notified 
    this.toggle.emit(bugToToggle);
  }

}
