import { Component, HostListener } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';

@Component({
  selector: 'app-mens-fashion',
  templateUrl: './mens-fashion.component.html',
  styleUrl: './mens-fashion.component.scss',
})
export class MensFashionComponent {
  constructor(private prdServ: AllProductsService) {}
  allProducts = this.prdServ.getproducts('Men’s Fashion');
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
