import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServisService } from 'src/app/services/shared-servis.service';
import { GetStudentDTO } from 'src/Models/GetDTO/GetStudentDTO';
import { AddStudentComponent } from '../add-student/add-student.component';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  
  student: GetStudentDTO;
  
  id: number;
  name: string;
  lastName: string;
  age: number;
  street: string;
  mail: string;

  constructor(private route: ActivatedRoute,
              private service: SharedServisService) { }

  ngOnInit(): void {
    //+ parsuje na stringa ? 
   const id =  this.route.snapshot.params['id'];
   
   //this.service.getStudent(id).subscribe((data) => {this.student = data});
    this.service.getStudent(id).subscribe((data) => {
      
    this.id = id;
    this.name = data.name,
    this.lastName = data.lastName
    this.age = data.age    
    this.mail = data.mail
    this.street = data.street

    //this.student = data;

   });

   console.log(this.name);

   
   
  }

  onSubmit(){

    const newStudent = {
      
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      street: this.street,
      mail: this.mail 

    }

    this.service.editStudent(newStudent, this.id).subscribe()
  }

}
