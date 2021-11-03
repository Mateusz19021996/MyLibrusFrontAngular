import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/login/login.component';
import { AddStudentComponent } from './components/teacher/add-student/add-student.component';
import { CheckClassesComponent } from './components/teacher/check-classes/check-classes.component';
import { SingleClassSubjectsComponent } from './components/teacher/check-classes/single-class-subjects/single-class-subjects.component';
import { SingleClassComponent } from './components/teacher/check-classes/single-class/single-class.component';
import { SingleFullClassComponent } from './components/teacher/check-classes/single-full-class/single-full-class.component';
import { CheckStudentComponent } from './components/teacher/check-student/check-student.component';
import { EditStudentComponent } from './components/teacher/edit-student/edit-student.component';
import { SingleStudentComponent } from './components/teacher/single-student/single-student.component';
import { TeacherPanelComponent } from './components/teacher/teacher-panel/teacher-panel.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  // {path: "teacherPanel/checkClasses",component: CheckClassesComponent},
  // {path: "teacherPanel/checkStudent",component: CheckStudentComponent},
  {
    path: "teacherPanel",
    component: TeacherPanelComponent,
    canActivate: [AuthGuardService],
    children:[
      {path: "checkStudent",component: CheckStudentComponent,canActivate: [AuthGuardService],}, 
      {path: "checkClasses",component: CheckClassesComponent,canActivate: [AuthGuardService],},
      {path: "addStudent",component: AddStudentComponent,canActivate: [AuthGuardService],},
      {path: "editStudent/:id",component: EditStudentComponent,canActivate: [AuthGuardService],},
      {path: "showGrades/:id",component: SingleStudentComponent,canActivate: [AuthGuardService],},      
      {path: "singleFullClass/:nameOfClass",component: SingleFullClassComponent},
      {path: "singleClassSubjects",component: SingleClassSubjectsComponent},
      
    ]
  },
  //{path: "editStudent/:id",component: EditStudentComponent},
  
  {path: "login",component: LoginComponent},
  {path: "",component: HomeComponent}

  // auth guard - check
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
