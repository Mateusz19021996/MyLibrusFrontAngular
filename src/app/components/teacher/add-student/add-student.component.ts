import { Component, OnInit } from '@angular/core';
import { SharedServisService } from 'src/app/services/shared-servis.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  name: string;
  lastName: string;
  age: number;
  street: string;
  mail: string;

  constructor(private service: SharedServisService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert("At least, you must give name and last name of student");
      return;
    }

    const newStudent = {

      name: this.name,
      lastName: this.lastName,
      age: this.age,
      street: this.street,
      mail: this.mail 
    }
    console.log(newStudent);
    this.service.addStudent(newStudent).subscribe((result) => {});
    

    this.name ='';
    this.lastName = '';
    this.age = 0;
    this.street = '';
    this.mail = '';


  }

}
