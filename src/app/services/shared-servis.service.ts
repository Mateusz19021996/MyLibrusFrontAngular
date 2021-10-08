import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetStudentDTO } from 'src/Models/GetDTO/GetStudentDTO';
import { CreateStudentDTO } from 'src/Models/CreateDTO/CreateStudentDTO';
import { EditStudentDTO } from 'src/Models/EditDTO/EditStudentDTO';
import { Observable } from 'rxjs';
import { GetStudentGradesDTO } from 'src/Models/GetDTO/GetStudentGradesDTO';
import { LoginDTO } from 'src/Models/LoginDTO/LoginDTO';

@Injectable({
  providedIn: 'root'
})
export class SharedServisService {

  //private myURL = 'http://localhost:4003'
  private myURL2 = "https://localhost:5001/api"

  constructor(private http: HttpClient) { 
    this.getStudents();
  }

  getStudents(): Observable<GetStudentDTO[]>{
    return this.http.get<GetStudentDTO[]>(this.myURL2+'/Student');
  }

  getStudent(val: any){
    return this.http.get<GetStudentDTO>(this.myURL2 + '/Student/' + val)
  }

  editStudent(student: EditStudentDTO, id: number){
    console.log(student)
    console.log(id)
    return this.http.patch<EditStudentDTO>(this.myURL2 + '/Student/' + id, student);
  }

  addStudent(student: CreateStudentDTO){
    //console.log("addStudent works !!!", student);
    return this.http.post<CreateStudentDTO>(this.myURL2 + '/Student', student);
  }

  deleteStudent(id: number){
    return this.http.delete<number>(this.myURL2 + '/Student/' + id)
  }

  getStudentGrades(id: number){
    console.log("getStudentGradesWorks")
    return this.http.get<GetStudentGradesDTO[]>(this.myURL2 + "/grade/" + id)    
  }

  // auth and autor part 

  login(login: LoginDTO){
    return this.http.post<LoginDTO>(this.myURL2 + "/account/login", login)
  }

}
