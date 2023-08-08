import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bug } from '../../models/bug';
import { BugsService } from '../../services/bugs.service';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {
  bug? : Bug;

  constructor(
    private activatedRoute : ActivatedRoute /* service that offers information about the currently active route */, 
    private bugsService : BugsService
  ){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const bugId = parseInt(params['id'])
      this.bug = this.bugsService.get(bugId)
    });
  }

}
