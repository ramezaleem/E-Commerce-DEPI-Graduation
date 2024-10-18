import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  constructor(private router : Router){}
  register(form:NgForm){
    console.log(form);
  }
  submit(){

    this.router.navigate(['/auth/login']);
  }
}
