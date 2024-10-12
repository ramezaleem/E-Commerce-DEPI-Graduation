import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { HomeCarouselComponent } from './components/home/Components/home-carousel/home-carousel.component';
import { HomeFlashSalesComponent } from './components/home/Components/home-flash-sales/home-flash-sales.component';
import { HomeCategoryBrowseComponent } from './components/home/Components/home-category-browse/home-category-browse.component';
import { HomeBestSellingComponent } from './components/home/Components/home-best-selling/home-best-selling.component';
import { HomeExploreProductsComponent } from './components/home/Components/home-explore-products/home-explore-products.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
