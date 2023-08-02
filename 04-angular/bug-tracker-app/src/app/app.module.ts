import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugOperationService } from './bugs/services/bugOperation.service';
import { BugsService } from './bugs/services/bugs.service';
import { TrimTextPipe } from './bugs/pipes/trimText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe
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
