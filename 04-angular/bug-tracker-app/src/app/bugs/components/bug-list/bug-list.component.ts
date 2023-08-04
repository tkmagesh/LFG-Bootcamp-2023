import { Component, Input } from '@angular/core';
import { BugsService } from '../../services/bugs.service';
import { Bug } from '../../models/bug';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent {


  @Input()
  sortAttr: string = '';

  @Input()
  sortDesc: boolean = false;

  constructor(public bugsService: BugsService) {

  }

  onBugRemove(bugToRemove: Bug) {
    this.bugsService.remove(bugToRemove)
  }

  onBtnRemoveClosedClick() {
    this.bugsService.removeClosed()
  }

  onBugToggle(bugToToggle: Bug) {
    // toggle the 'closed' status of the give bug
    this.bugsService.toggle(bugToToggle)
  }
}
