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
import { authGuard } from './modules/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate: [authGuard]},
  { path: 'about', component: AboutComponent , canActivate: [authGuard]},
  { path: 'Contact', component: ContactComponent , canActivate: [authGuard]},
  // { path: 'SignUp', component: SignUpComponent },
  // { path: 'Login', component: LoginComponent },
  { path: 'allProducts', component: AllProductsComponent , canActivate: [authGuard]},
  { path: 'cart', component: CartComponent , canActivate: [authGuard]},
  { path: 'auth', loadChildren: () => import('./modules/auth/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
