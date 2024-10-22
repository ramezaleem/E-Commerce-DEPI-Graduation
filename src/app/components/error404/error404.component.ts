import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss'
})
export class Error404Component {
constructor(private router:Router){}

goto(){
  this.router.navigate(['/home']);
}
}
