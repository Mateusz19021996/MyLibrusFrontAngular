import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// npm install @auth0/angular-jwt --save
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
import { LoginComponent } from './components/home/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/home/register/register.component';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './services/auth-guard.service';
import { SingleClassComponent } from './components/teacher/check-classes/single-class/single-class.component';
import { SingleFullClassComponent } from './components/teacher/check-classes/single-full-class/single-full-class.component';
import { SingleClassSubjectsComponent } from './components/teacher/check-classes/single-class-subjects/single-class-subjects.component';
import { NgxPaginationModule } from 'ngx-pagination';



export function tokenGetter(){
  return localStorage.getItem("jwt");
}


@NgModule({
  declarations: [
    AppComponent,
    CheckStudentComponent,
    CheckClassesComponent,
    TeacherPanelComponent,
    AddStudentComponent,
    EditStudentComponent,
    SingleStudentComponent,
    SingleSubjectGradesComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    SingleClassComponent,
    SingleFullClassComponent,
    SingleClassSubjectsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    RouterModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains:["localhost:5001"],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
