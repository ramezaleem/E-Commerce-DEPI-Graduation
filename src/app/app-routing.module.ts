import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"SignUp",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
