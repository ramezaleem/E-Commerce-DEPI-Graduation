import { Component } from '@angular/core';
import { GuardServService } from '../../services/guard-serv.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private guardServ:GuardServService,
  private router :Router
){}
submit(){
  this.guardServ.isloggedin=true;
  this.router.navigate(['/home']);
  localStorage.setItem('isloggedin' , 'true');
  
}
}
