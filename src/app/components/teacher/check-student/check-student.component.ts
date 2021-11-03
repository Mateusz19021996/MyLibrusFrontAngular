import { Component, OnInit } from '@angular/core';
import { SharedServisService } from 'src/app/services/shared-servis.service';
import { GetStudentDTO, Grade } from 'src/Models/GetDTO/GetStudentDTO';
import { Testowe } from 'src/Models/GetDTO/moje';
import { ActivatedRoute, Router } from '@angular/router';
import { GetGradeDTO } from 'src/Models/GetDTO/GetGradeDTO';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-check-student',
  templateUrl: './check-student.component.html',
  styleUrls: ['./check-student.component.css']
})
export class CheckStudentComponent implements OnInit {

  studentsList: GetStudentDTO[];
  gradess: Grade;
  currentPage: number = 3
  itemsPerPage: number;

  constructor(private service: SharedServisService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
    
  }

  valueAssign(){
    console.log(this.itemsPerPage);
  }

  getStudents(){
    this.service.getStudents().subscribe((data) => {
      this.studentsList = data  
    }); 
  }

  editStudent(id: number){    
    this.router.navigate(['teacherPanel/editStudent', id]);    
  }

  showGrades(id: number){
    this.router.navigate(['teacherPanel/showGrades', id]);
  }

  deleteStudent(id: number){
    if(confirm("Are you sure that You want to delete this student?")){
      this.service.deleteStudent(id).subscribe(() => {
        this.getStudents();        
      })
    }
    
  }

}
