import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isUserAuthenticated(){
    const token: string = localStorage.getItem("jwt")!;

    if(token){
      return true;
    }
    else{
      return false;
    }
  }

//   getExpiration() {
//     const expiration = localStorage.getItem("expires_at");
//     const expiresAt = JSON.parse(expiration);
//     return moment(expiresAt);
// }  



}
