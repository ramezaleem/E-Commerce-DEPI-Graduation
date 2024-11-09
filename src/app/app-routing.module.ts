import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './modules/auth/auth/components/login/login.component';
import { ContactComponent } from './components/Contact/Components/contact/contact.component';
import { SignUpComponent } from './modules/auth/auth/components/sign-up/sign-up.component';
import { AllProductsComponent } from './components/all-products/all-products.component';

import { authGuard } from './modules/auth.guard';
import { Error404Component } from './components/error404/error404.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { OwnCategoryProductsComponent } from './components/own-category-products/own-category-products.component';
import { MensFashionComponent } from './components/mens-fashion/mens-fashion.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { HomeLifeStyleComponent } from './components/home-life-style/home-life-style.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { SportsOutDoorComponent } from './components/sports-out-door/sports-out-door.component';
import { BabysToysComponent } from './components/babys-toys/babys-toys.component';
import { GroceriesPetsComponent } from './components/groceries-pets/groceries-pets.component';
import { HealthBeautyComponent } from './components/health-beauty/health-beauty.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'Contact', component: ContactComponent, canActivate: [authGuard] },
  {
    path: 'allProducts',
    component: AllProductsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'ownCategory', component: OwnCategoryProductsComponent },
  { path: 'MensFashion', component: MensFashionComponent },
  { path: 'Electronics', component: ElectronicsComponent },
  { path: 'HomeLifeStyle', component: HomeLifeStyleComponent },
  { path: 'Medicine', component: MedicineComponent },
  { path: 'SportsOutDoor', component: SportsOutDoorComponent },
  { path: 'BabysToys', component: BabysToysComponent },
  { path: 'GroceriesPets', component: GroceriesPetsComponent },
  { path: 'HealthBeauty', component: HealthBeautyComponent },
  { path: 'detailes/:category/:id/:name/:image/:price/:rating/:numberOfRatings', component: ProductDetailesComponent },
  { path: 'Cart', component: CartComponent },

  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
