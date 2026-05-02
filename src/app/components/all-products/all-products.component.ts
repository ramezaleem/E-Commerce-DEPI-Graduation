import { Component, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { CartService } from '../../cart-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit, OnDestroy {
  @Input() showOverlay: boolean = false;
  
  constructor(private prdServ: AllProductsService, private cartService: CartService) {}
  
  allProducts = this.prdServ.allProducts;
  showButton = false;
  timerVisible: boolean = true;
  countdown: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 14);

    this.countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.countdown);
        this.timerVisible = false;
      }
    }, 1000);
  }

  getproduct(event: any) {
    this.cartService.addToCart(event.item, event.quantity);
  }

  ngOnDestroy() {
    clearInterval(this.countdown);
  }
}
