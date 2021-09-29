import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckStudentComponent } from './components/teacher/check-student/check-student.component';
import { CheckClassesComponent } from './components/teacher/check-classes/check-classes.component';
import { TeacherPanelComponent } from './components/teacher/teacher-panel/teacher-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedServisService } from './services/shared-servis.service';
import { AddStudentComponent } from './components/teacher/add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './components/teacher/edit-student/edit-student.component';
import { SingleStudentComponent } from './components/teacher/single-student/single-student.component';
import { SingleSubjectGradesComponent } from './components/teacher/single-student/single-subject-grades/single-subject-grades.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CheckStudentComponent,
    CheckClassesComponent,
    TeacherPanelComponent,
    AddStudentComponent,
    EditStudentComponent,
    SingleStudentComponent,
    SingleSubjectGradesComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [SharedServisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
