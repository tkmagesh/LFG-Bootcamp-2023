import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BugsModule } from './bugs/bugs.module';

import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BugsModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
