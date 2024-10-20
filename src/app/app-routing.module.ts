import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './modules/auth/auth/components/login/login.component';
import { ContactComponent } from './components/Contact/Components/contact/contact.component';
import { SignUpComponent } from './modules/auth/auth/components/sign-up/sign-up.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { authGuard } from './modules/auth.guard';
import { Error404Component } from './components/error404/error404.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { OwnCategoryProductsComponent } from './components/own-category-products/own-category-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'Contact', component: ContactComponent, canActivate: [authGuard] },
  {path: 'allProducts',component: AllProductsComponent,canActivate: [authGuard]},
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'auth',loadChildren: () =>import('./modules/auth/auth/auth.module').then((m) => m.AuthModule),},
  { path: 'ownCategory', component: OwnCategoryProductsComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
