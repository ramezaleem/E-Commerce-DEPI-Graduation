import { Component, HostListener } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';

@Component({
  selector: 'app-health-beauty',
  templateUrl: './health-beauty.component.html',
  styleUrl: './health-beauty.component.scss',
})
export class HealthBeautyComponent {
  constructor(private prdServ: AllProductsService) {}

  allProducts = this.prdServ.getproducts('Health & Beauty');
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
