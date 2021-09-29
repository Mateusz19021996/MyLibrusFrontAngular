import { Component, Input, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SharedServisService } from 'src/app/services/shared-servis.service';
import { GetStudentGradesDTO } from 'src/Models/GetDTO/GetStudentGradesDTO';

@Component({
  selector: 'app-single-subject-grades',
  templateUrl: './single-subject-grades.component.html',
  styleUrls: ['./single-subject-grades.component.css']
})
export class SingleSubjectGradesComponent implements OnInit {

@Input() testt: GetStudentGradesDTO;
@Input() grade: number[];

  

  constructor() { }

  ngOnInit(): void {
    
  }

  
}
