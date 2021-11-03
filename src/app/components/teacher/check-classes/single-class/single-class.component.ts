import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServisService } from 'src/app/services/shared-servis.service';
import { GetStudentTwoDTO } from 'src/Models/GetDTO/GetStudentTwoDTO';

@Component({
  selector: 'app-single-class',
  templateUrl: './single-class.component.html',
  styleUrls: ['./single-class.component.css']
})
export class SingleClassComponent implements OnInit {

  @Input() singleClass: string;
  studentsOfClass: GetStudentTwoDTO[]

  constructor(private service: SharedServisService,
              private router: Router) { }

  ngOnInit(): void {
  }

  GetAllStudentsForOneClass(nameOfClass: string){    
    this.service.getAllStudentsForOneClass(nameOfClass)
    .subscribe((data) => this.studentsOfClass = data)

    this.router.navigate(["teacherPanel/singleFullClass", nameOfClass])
    
    console.log(this.studentsOfClass)
  }
}
