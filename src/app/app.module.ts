import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
// import { RouterModule } from '@angular/router'; // Import RouterModule

import { HomeComponent } from './components/home/home.component';
import { HomeCarouselComponent } from './components/home/Components/home-carousel/home-carousel.component';
import { HomeFlashSalesComponent } from './components/home/Components/home-flash-sales/home-flash-sales.component';
import { HomeCategoryBrowseComponent } from './components/home/Components/home-category-browse/home-category-browse.component';
import { HomeBestSellingComponent } from './components/home/Components/home-best-selling/home-best-selling.component';
import { HomeExploreProductsComponent } from './components/home/Components/home-explore-products/home-explore-products.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';

import { AboutComponent } from './about/about.component';
import { AboutHeroComponent } from './about/components/about-hero/about-hero.component';
import { AboutMainComponent } from './about/components/about-main/about-main.component';
import { AboutMidComponent } from './about/components/about-mid/about-mid.component';
import { AboutFootComponent } from './about/components/about-foot/about-foot.component';

import { ContactComponent } from './components/Contact/Components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o'; // Keep this import only once
import { SecondProductComponentComponent } from './shared/components/second-product-component/second-product-component.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { NewArrivalComponent } from './components/home/Components/new-arrival/new-arrival.component';
import { FormsModule } from '@angular/forms';
import { Error404Component } from './components/error404/error404.component';
import { SecondExploreOurProductsComponent } from './components/home/Components/second-explore-our-products/second-explore-our-products.component';
import { OwnCategoryProductsComponent } from './components/own-category-products/own-category-products.component';
import { MensFashionComponent } from './components/mens-fashion/mens-fashion.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { HomeLifeStyleComponent } from './components/home-life-style/home-life-style.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { SportsOutDoorComponent } from './components/sports-out-door/sports-out-door.component';
import { BabysToysComponent } from './components/babys-toys/babys-toys.component';
import { GroceriesPetsComponent } from './components/groceries-pets/groceries-pets.component';
import { HealthBeautyComponent } from './components/health-beauty/health-beauty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeCarouselComponent,
    HomeFlashSalesComponent,
    HomeCategoryBrowseComponent,
    HomeBestSellingComponent,
    HomeExploreProductsComponent,
    FooterComponent,
    ProductCardComponent,
    AboutComponent,
    AboutHeroComponent,
    AboutMainComponent,
    AboutMidComponent,
    AboutFootComponent,
    SecondExploreOurProductsComponent,
    SecondProductComponentComponent,
    ContactComponent,
    AllProductsComponent,
    NewArrivalComponent,
    Error404Component,
    SecondProductComponentComponent,
    OwnCategoryProductsComponent,
    MensFashionComponent,
    ElectronicsComponent,
    HomeLifeStyleComponent,
    MedicineComponent,
    SportsOutDoorComponent,
    BabysToysComponent,
    GroceriesPetsComponent,
    HealthBeautyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
