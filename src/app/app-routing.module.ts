import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/Contact/Components/contact/contact.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'allProducts', component: AllProductsComponent },
  { path: 'cart', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
