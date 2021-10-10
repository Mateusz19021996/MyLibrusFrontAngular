import { Component, OnInit } from '@angular/core';
import { SharedServisService } from 'src/app/services/shared-servis.service';
import { GetStudentTwoDTO } from 'src/Models/GetDTO/GetStudentTwoDTO';
import { GetStudentWithGradesFromSubjectDTO } from 'src/Models/GetDTO/GetStudentWithGradesFromSubjectDTO';

@Component({
  selector: 'app-check-classes',
  templateUrl: './check-classes.component.html',
  styleUrls: ['./check-classes.component.css']
})
export class CheckClassesComponent implements OnInit {

  classes: string[]

  a: string
  b: string
  c: string

  studentsOfClass: GetStudentTwoDTO[]

  studentsWithGrades: GetStudentWithGradesFromSubjectDTO[]

  constructor(private service: SharedServisService) { }

  ngOnInit(): void {
  }

  GetAllClass(){
    this.service.getAllClasses().subscribe((data) => this.classes = data)
    console.log(this.classes);
  }

  GetAllStudentsForOneClass(nameOfClass: string){
    nameOfClass = "3B"
    this.service.getAllStudentsForOneClass(nameOfClass)
    .subscribe((data) => this.studentsOfClass = data)

    console.log(this.studentsOfClass)
  }

  getAllStudentsGradesForAllClass(nameOfClass: string, nameOfSubject: string){
    nameOfClass = "1A"
    nameOfSubject = "Math"
    this.service.getAllStudentsGradesForAllClass(nameOfClass, nameOfSubject)
    .subscribe((data) => this.studentsWithGrades = data)

    console.log(this.studentsWithGrades);
  }
}
