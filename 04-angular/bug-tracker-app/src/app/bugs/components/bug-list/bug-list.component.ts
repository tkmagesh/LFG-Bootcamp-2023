import { Component, Input } from '@angular/core';
import { BugsService } from '../../services/bugs.service';
import { Bug } from '../../models/bug';


// Using the "stateless" service
@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent {


  /* Recieved as input from the parent component (Bugs) */
  @Input()
  sortAttr: string = '';

  /* Recieved as input from the parent component (Bugs) */
  @Input()
  sortDesc: boolean = false;

  /* 
  @Input('data')
  bugs : Bug[] = []; 
  */

  constructor(public bugsService: BugsService) {

  }

  // event subscription for the 'remove' event from the BugItem component
  onBugRemove(bugToRemove: Bug) {
    // call the service to remove the given bug
    this.bugsService.remove(bugToRemove)
  }


  onBtnRemoveClosedClick() {
    // call the service to remove all the closed bugs
    this.bugsService.removeClosed()
  }

  // event subscription for the 'toggle' event from the BugItem component
  onBugToggle(bugToToggle: Bug) {
    // toggle the 'closed' status of the give bug
    this.bugsService.toggle(bugToToggle)
  }
}


/* 
export class BugListComponent {


  // Recieved as input from the parent component (Bugs)
  @Input()
  sortAttr: string = '';

  // Recieved as input from the parent component (Bugs)
  @Input()
  sortDesc: boolean = false;

  constructor(public bugsService: BugsService) {

  }

  // event subscription for the 'remove' event from the BugItem component
  onBugRemove(bugToRemove: Bug) {
    // call the service to remove the given bug
    this.bugsService.remove(bugToRemove)
  }

  
  onBtnRemoveClosedClick() {
    // call the service to remove all the closed bugs
    this.bugsService.removeClosed()
  }

  // event subscription for the 'toggle' event from the BugItem component
  onBugToggle(bugToToggle: Bug) {
    // toggle the 'closed' status of the give bug
    this.bugsService.toggle(bugToToggle)
  }
} 
*/
