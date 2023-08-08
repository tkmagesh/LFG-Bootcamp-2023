import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BugsModule } from './bugs/bugs.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { BugsComponent } from './bugs/bugs.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home.component';
import { PathNotFoundComponent } from './path-not-found.component';
import { BugEditComponent } from './bugs/components/bug-edit/bug-edit.component';

const routes : Routes = [
  {path : "", component : HomeComponent, pathMatch : "full"},
  {path : "projects", component : ProjectsComponent},
  {path : "**", component : PathNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BugsModule,
    ProjectsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
