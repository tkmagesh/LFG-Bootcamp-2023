import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugOperationService } from './bugs/services/bugOperation.service';
import { BugsService } from './bugs/services/bugs.service';
import { BugsHeaderComponent } from './bugs/header.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { BugStatsComponent } from './bugs/components/bug-stats/bug-stats.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';
import { BugSortComponent } from './bugs/components/bug-sort/bug-sort.component';
import { BugListComponent } from './bugs/components/bug-list/bug-list.component';
import { BugItemComponent } from './bugs/components/bug-item/bug-item.component';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    BugsHeaderComponent,
    BugStatsComponent,
    ClosedCountPipe,
    BugEditComponent,
    BugSortComponent,
    BugListComponent,
    BugItemComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule
  ],
  providers: [
    BugsService,
    BugOperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
