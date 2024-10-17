import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FlashSalesService } from '../../../../services/flash-sales.service';

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
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1200: {
        items: 4.5,
      },
    },
    nav: false,
  };

  timerVisible: boolean = true;
  countdown: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  // Product Data
  // products = [
  //   {
  //     id: 1,
  //     name: 'HAVIT HV-G92 Gamepad',
  //     image: 'assets/images/PlayStation.png',
  //     discount: '-40%',
  //     price: 299.99,
  //     originalPrice: 499.99,
  //     rating: 4.5,
  //     numberOfRatings: 150,
  //   },
  //   {
  //     id: 2,
  //     name: 'Ak-900 Wired Keyboard',
  //     image: 'assets/images/Wired-Keyboard.jpeg',
  //     discount: '-35%',
  //     price: 49.99,
  //     originalPrice: 79.99,
  //     rating: 5.0,
  //     numberOfRatings: 200,
  //   },
  //   {
  //     id: 3,
  //     name: 'Ips LCD Gaming Monitor',
  //     image: 'assets/images/Gaming-Monitor.jpg',
  //     discount: '-25%',
  //     price: 29.99,
  //     originalPrice: 39.99,
  //     rating: 4.0,
  //     numberOfRatings: 150,
  //   },
  //   {
  //     id: 4,
  //     name: 'S-Series Comfor Chair',
  //     image: 'assets/images/Chair.jpeg',
  //     discount: '-15%',
  //     price: 199.99,
  //     originalPrice: 249.99,
  //     rating: 4.8,
  //     numberOfRatings: 300,
  //   },
  //   {
  //     id: 5,
  //     name: 'Logitech G Pro X Gaming Headset',
  //     image: 'assets/images/Gaming-Headset.jpg',
  //     discount: '-30%',
  //     price: 139.99,
  //     originalPrice: 199.99,
  //     rating: 4.7,
  //     numberOfRatings: 250,
  //   },
  //   {
  //     id: 6,
  //     name: 'Razer BlackWidow V3 Keyboard',
  //     image: 'assets/images/Razer-Keyboard.jpg',
  //     discount: '-20%',
  //     price: 79.99,
  //     originalPrice: 99.99,
  //     rating: 4.6,
  //     numberOfRatings: 180,
  //   },
  //   {
  //     id: 7,
  //     name: 'ASUS 27" Gaming Monitor',
  //     image: 'assets/images/Gaming-Monitor.jpg',
  //     discount: '-15%',
  //     price: 339.99,
  //     originalPrice: 399.99,
  //     rating: 4.5,
  //     numberOfRatings: 210,
  //   },
  //   {
  //     id: 8,
  //     name: 'DXRacer Racing Series Gaming Chair',
  //     image: 'assets/images/Gaming-Chair.jpg',
  //     discount: '-25%',
  //     price: 249.99,
  //     originalPrice: 329.99,
  //     rating: 4.8,
  //     numberOfRatings: 320,
  //   },
  // ];
  // products = [
  //   {
  //     id: 1,
  //     name: 'HAVIT HV-G92 Gamepad',
  //     image: 'assets/images/PlayStation.png',
  //     discount: '-40%',
  //     price: 299.99,
  //     originalPrice: 499.99,
  //     rating: 4.5,
  //     numberOfRatings: 150,
  //   },
  //   {
  //     id: 2,
  //     name: 'Ak-900 Wired Keyboard',
  //     image: 'assets/images/Wired-Keyboard.jpeg',
  //     discount: '-35%',
  //     price: 49.99,
  //     originalPrice: 79.99,
  //     rating: 5.0,
  //     numberOfRatings: 200,
  //   },
  //   {
  //     id: 3,
  //     name: 'Ips LCD Gaming Monitor',
  //     image: 'assets/images/Gaming-Monitor.jpg',
  //     discount: '-25%',
  //     price: 189.99, // Adjusted to a more realistic price
  //     originalPrice: 249.99,
  //     rating: 4.0,
  //     numberOfRatings: 150,
  //   },
  //   {
  //     id: 4,
  //     name: 'S-Series Comfort Chair',
  //     image: 'assets/images/Chair.jpeg',
  //     discount: '-15%',
  //     price: 212.49, // Adjusted to a more realistic price
  //     originalPrice: 249.99,
  //     rating: 4.8,
  //     numberOfRatings: 300,
  //   },
  //   {
  //     id: 5,
  //     name: 'Logitech Gaming Headset',
  //     image: 'assets/images/Headset-Gaming.jpeg',
  //     discount: '-30%',
  //     price: 139.99,
  //     originalPrice: 199.99,
  //     rating: 4.7,
  //     numberOfRatings: 250,
  //   },
  //   {
  //     id: 6,
  //     name: 'Razer BlackWidow Keyboard',
  //     image: 'assets/images/Razer-Keyboard.jpeg',
  //     discount: '-20%',
  //     price: 79.99,
  //     originalPrice: 99.99,
  //     rating: 4.6,
  //     numberOfRatings: 180,
  //   },
  //   {
  //     id: 7,
  //     name: 'ASUS 27" Gaming Monitor',
  //     image: 'assets/images/ASUS-Gaming-Monitor.jpeg',
  //     discount: '-15%',
  //     price: 339.99,
  //     originalPrice: 399.99,
  //     rating: 4.5,
  //     numberOfRatings: 210,
  //   },
  //   {
  //     id: 8,
  //     name: 'DXRacer Gaming Chair',
  //     image: 'assets/images/Gaming-Chair.jpeg',
  //     discount: '-25%',
  //     price: 249.99,
  //     originalPrice: 329.99,
  //     rating: 4.8,
  //     numberOfRatings: 320,
  //   },
  // ];
  constructor(private productServ: FlashSalesService) {}
  products = this.productServ.products;
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
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
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
}
