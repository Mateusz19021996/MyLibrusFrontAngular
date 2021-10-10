import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SharedServisService } from 'src/app/services/shared-servis.service';
import { UserTokenDTO } from 'src/Models/UserTokenDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;

  // here we create our user

  currentUser: UserTokenDTO = {
    id: null,
    name: null,
    lastName: null,
    role: null,
    mail: null,
  };

  constructor(private service: SharedServisService,
              private router: Router,
              private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {    
  }

  login(form: NgForm){
    const credentials = {
      email: form.value.email,
      password: form.value.password
    }

    console.log(credentials);
    this.service.login(credentials).subscribe(data => {
      const token = (<any>data).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;

      /* - logic to decode and to route to appropriate panel
         - because of the fact that token shoudn't contains many informations we will use only
           id of user  
      */

      const decodedToken = this.jwtHelper.decodeToken(token);

      this.currentUser.id = decodedToken.id;

      console.log("this revocation id is :" + this.currentUser.id)

      console.log(decodedToken);




      this.router.navigate(["/teacherPanel"])
    },
    err => {
      this.invalidLogin = true;
    })
  }

  // isStudent(): boolean{

  // }
}
