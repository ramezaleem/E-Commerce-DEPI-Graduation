import { Component, HostListener } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';

@Component({
  selector: 'app-home-life-style',
  templateUrl: './home-life-style.component.html',
  styleUrl: './home-life-style.component.scss',
})
export class HomeLifeStyleComponent {
  constructor(private prdServ: AllProductsService) {}
  allProducts = this.prdServ.getproducts('Home & Lifestyle');
  showButton = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the button when scrolled down 300px
    this.showButton = window.pageYOffset > 300;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
