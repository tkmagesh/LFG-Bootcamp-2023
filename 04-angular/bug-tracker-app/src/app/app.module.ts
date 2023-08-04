import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugOperationService } from './bugs/services/bugOperation.service';
import { BugsService } from './bugs/services/bugs.service';
import { TrimTextPipe } from './bugs/pipes/trimText.pipe';
import { SortPipe } from './bugs/pipes/sort.pipe';
import { BugsHeaderComponent } from './bugs/header.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { ElapsedPipe } from './bugs/pipes/elapsed.pipe';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';
import { BugSortComponent } from './bugs/components/bug-sort/bug-sort.component';
import { BugListComponent } from './bugs/components/bug-list/bug-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    BugsHeaderComponent,
    BugStatsComponent,
    ClosedCountPipe,
    TrimTextPipe,
    SortPipe,
    ElapsedPipe,
    BugEditComponent,
    BugSortComponent,
    BugListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugsService,
    BugOperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
