import { Component, HostListener, Input } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
@Component({
  selector: 'app-own-category-products',
  templateUrl: './own-category-products.component.html',
  styleUrl: './own-category-products.component.scss'
})
export class OwnCategoryProductsComponent {
  constructor(private prdServ: AllProductsService) {}
  allProducts = this.prdServ.getproducts('Woman’s Fashion');
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
