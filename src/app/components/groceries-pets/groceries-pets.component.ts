import { Component, HostListener } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';

@Component({
  selector: 'app-groceries-pets',
  templateUrl: './groceries-pets.component.html',
  styleUrl: './groceries-pets.component.scss',
})
export class GroceriesPetsComponent {
  constructor(private prdServ: AllProductsService) {}

  allProducts = this.prdServ.getproducts('Groceries & Pets');
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
