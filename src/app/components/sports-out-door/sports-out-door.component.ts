import { Component, HostListener } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';

@Component({
  selector: 'app-sports-out-door',
  templateUrl: './sports-out-door.component.html',
  styleUrl: './sports-out-door.component.scss',
})
export class SportsOutDoorComponent {
  constructor(private prdServ: AllProductsService) {}
  allProducts = this.prdServ.getproducts('Sports & Outdoor');
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
