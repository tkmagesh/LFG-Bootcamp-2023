import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bug } from '../../models/bug';

@Component({
  selector: 'app-bug-item',
  templateUrl: './bug-item.component.html',
  styleUrls: ['./bug-item.component.css']
})
export class BugItemComponent {
  

  @Input('data')
  bug!: Bug;

  @Output()
  toggle : EventEmitter<Bug> = new EventEmitter<Bug>()

  @Output()
  remove : EventEmitter<Bug> = new EventEmitter<Bug>()

  onBtnRemoveClick(bugToRemove: Bug) {
    this.remove.emit(bugToRemove);
  }

  onBugTitleClick(bugToToggle: Bug) {
    this.toggle.emit(bugToToggle);
  }

}
