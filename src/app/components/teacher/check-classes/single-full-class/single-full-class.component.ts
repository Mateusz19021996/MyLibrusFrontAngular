import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServisService } from 'src/app/services/shared-servis.service';
import { GetStudentTwoDTO } from 'src/Models/GetDTO/GetStudentTwoDTO';

@Component({
  selector: 'app-single-full-class',
  templateUrl: './single-full-class.component.html',
  styleUrls: ['./single-full-class.component.css']
})
export class SingleFullClassComponent implements OnInit {

  students: GetStudentTwoDTO[]
  currentNameOfClass: string;


  constructor(private route: ActivatedRoute,
              private service: SharedServisService) { }

  ngOnInit(): void {
    this.currentNameOfClass =  this.route.snapshot.params['nameOfClass']; 
    console.log(this.currentNameOfClass);   
    this.getAllSubjectsForClass(this.currentNameOfClass)
    
  }

  getAllSubjectsForClass(nameOfClass: string){
    nameOfClass = this.currentNameOfClass
    this.service.getAllStudentsForOneClass(nameOfClass).subscribe((data) => {
      this.students = data;
      console.log(this.students);
    })
  }

}
