import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServisService } from 'src/app/services/shared-servis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;

  constructor(private service: SharedServisService,
              private router: Router) { }

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
      this.router.navigate(["/teacherPanel"])
    },
    err => {
      this.invalidLogin = true;
    })
  }
}
