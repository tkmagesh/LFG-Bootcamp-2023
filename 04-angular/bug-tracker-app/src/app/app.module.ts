import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BugsModule } from './bugs/bugs.module';
import { ProjectsModule } from './projects/projects.module';
import { AppRoutingModule } from './app-router.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BugsModule,
    ProjectsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
