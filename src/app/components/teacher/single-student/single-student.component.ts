import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServisService } from 'src/app/services/shared-servis.service';
import { GetStudentGradesDTO } from 'src/Models/GetDTO/GetStudentGradesDTO';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {

  id: number;
  listOfGrades: GetStudentGradesDTO[];

  name: string;
  lastName: string;
  studentClass: string;

  faUserGraduate = faUserGraduate;
  faTimes = faTimes;
  
  

  constructor(private route: ActivatedRoute,
              private service: SharedServisService) { }

ngOnInit(): void {
const idFromRoute =  this.route.snapshot.params['id'];
this.id = idFromRoute;
this.getGradesOfStudent(idFromRoute);
this.getStudent(idFromRoute);



}

getGradesOfStudent(id: number){

  this.service.getStudentGrades(id).subscribe((data) => {
    this.listOfGrades = data
  });
}

getStudent(id: number){
  this.service.getStudent(id).subscribe((data) => {
    this.name = data.name
    this.lastName = data.lastName
    this.studentClass = data.studentClass
  })
}


}
