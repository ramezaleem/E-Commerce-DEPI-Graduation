import { Component, HostListener } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { IallProducts } from '../../interfaces/interface-all-product';

@Component({
  selector: 'app-babys-toys',
  templateUrl: './babys-toys.component.html',
  styleUrl: './babys-toys.component.scss',
})
export class BabysToysComponent {
  constructor(private prdServ: AllProductsService) {}
 allProducts = this.prdServ.getproducts("Baby’s & Toys");
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
