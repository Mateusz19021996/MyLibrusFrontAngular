import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/teacher/add-student/add-student.component';
import { CheckClassesComponent } from './components/teacher/check-classes/check-classes.component';
import { CheckStudentComponent } from './components/teacher/check-student/check-student.component';
import { EditStudentComponent } from './components/teacher/edit-student/edit-student.component';
import { SingleStudentComponent } from './components/teacher/single-student/single-student.component';

const routes: Routes = [
  {path: "checkClasses",component: CheckClassesComponent},
  {path: "checkStudent",component: CheckStudentComponent},
  {path: "addStudent",component: AddStudentComponent},
  {path: "editStudent/:id",component: EditStudentComponent},
  {path: "showGrades/:id",component: SingleStudentComponent}

  // auth guard - check
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
