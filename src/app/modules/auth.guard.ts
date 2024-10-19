import { inject, INJECTOR } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('isloggedin')=== "true"){
  return true
 }
 else{
   inject(Router).navigate(["/auth/SignUp"])
   return false;
 }



};
