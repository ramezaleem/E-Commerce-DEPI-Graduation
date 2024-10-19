import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

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
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContactComponent } from './components/Contact/Components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondProductComponentComponent } from './shared/components/second-product-component/second-product-component.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllProductsComponent } from './components/all-products/all-products.component';

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
    CartComponent,
    LoginComponent,
    SignUpComponent,
    ContactComponent,
    SecondProductComponentComponent,
    AllProductsComponent,
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
