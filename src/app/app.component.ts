import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyLibrusApp';

  constructor(private router: Router){}

  onClickm(){
    this.router.navigate(['/login']); 
  }
}
