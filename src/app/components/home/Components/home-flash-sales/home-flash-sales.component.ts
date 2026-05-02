import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllProductsService } from '../../../../services/all-products.service';
import { IallProducts } from '../../../../interfaces/interface-all-product';
import { Router } from '@angular/router';
import { CartService } from '../../../../cart-service.service';

@Component({
  selector: 'app-home-flash-sales',
  templateUrl: './home-flash-sales.component.html',
  styleUrls: ['./home-flash-sales.component.scss'],
})
export class HomeFlashSalesComponent implements OnInit, OnDestroy {
  @Output() navigateCarousel: EventEmitter<string> = new EventEmitter();

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 4.5,
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 },
      1200: { items: 4.5 },
    },
    nav: false,
  };
  
  timerVisible: boolean = true;
  countdown: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  products: IallProducts[] = [];

  constructor(
    private newFlashServ: AllProductsService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.startCountdown();
    this.getproducts();
  }

  getproducts() {
    this.products = this.newFlashServ.getproducts('Electronics');
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

  ngOnDestroy() {
    clearInterval(this.countdown);
  }

  onNavigate(direction: string) {
    this.navigateCarousel.emit(direction);
  }

  getProduct(event: any) {
    this.cartService.addToCart(event.item, event.quantity);
  }
}
