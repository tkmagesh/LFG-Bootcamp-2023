import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectEditComponent,
    ProjectListComponent,    
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
