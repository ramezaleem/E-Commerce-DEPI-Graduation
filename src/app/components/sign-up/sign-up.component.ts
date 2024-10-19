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
  password:string ='';
  showPassword:boolean=false;
  togglePasswordVisibility(){
    this.showPassword = !this.showPassword
  }
  submit(){
    this.router.navigate(['/auth/login']);
  }
  // name:string = '';
  // email: string = '';
  // // password: string = '';
  // message: string = '';


  // onRegister(form:NgForm) {
  //   console.log(form);
  //   console.log(form.value.password);

  //   if (this.email && this.password && this.name) {
  //     // Save the email and password to localStorage
  //     localStorage.setItem('userName', this.name);
  //     localStorage.setItem('userEmail', this.email);
  //     localStorage.setItem('userPassword', this.password);
  //     this.message = 'Registration successful! You can now log in.';
  //   } else {
  //     this.message = 'Please fill out all fields.';
  //   }
  //   // this.router.navigate(['/auth/login']);
  // }

}
