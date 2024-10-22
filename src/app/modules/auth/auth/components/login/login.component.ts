import { Component } from '@angular/core';
import { GuardServService } from '../../../../../services/guard-serv.service';
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
  password: string = '';
  showPassword: boolean = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Toggle password visibility
  }

  // onLogin() {
  //   // Handle login logic here
  //   console.log('Logging in with password:', this.password);
  // }

// email: string = '';
//   password: string = '';
//   errorMessage: string = '';


//   onLogin() {
//     const storedEmail = localStorage.getItem('userEmail');
//     const storedPassword = localStorage.getItem('userPassword');

//     if (this.email === storedEmail && this.password === storedPassword) {
//       this.errorMessage = 'Login successful!';
//       // Proceed to the dashboard or next part of the app
//     } else {
//       this.errorMessage = 'Invalid email or password. Please register first or check your credentials.';
//     }
//   }
// }
}
