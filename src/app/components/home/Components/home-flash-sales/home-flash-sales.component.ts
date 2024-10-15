import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-home-flash-sales',
  templateUrl: './home-flash-sales.component.html',
  styleUrls: ['./home-flash-sales.component.scss'],
})
export class HomeFlashSalesComponent implements OnInit, OnDestroy {
  timerVisible: boolean = true;
  countdown: any;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  @Output() navigateCarousel: EventEmitter<string> = new EventEmitter();

  // Product data
  products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'assets/images/PlayStation.png',
      discount: '-40%',
      price: 299.99,
      originalPrice: 499.99,
      rating: 4.5,
      numberOfRatings: 150,
    },
    {
      id: 2,
      name: 'Ak-900 Wired Keyboard',
      image: 'assets/images/Wired-Keyboard.jpeg',
      discount: '-35%',
      price: 49.99,
      originalPrice: 79.99,
      rating: 5.0,
      numberOfRatings: 200,
    },
    {
      id: 3,
      name: 'Wireless Mouse',
      image: 'assets/images/Wired-Keyboard.jpeg',
      discount: '-25%',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.0,
      numberOfRatings: 150,
    },
    {
      id: 4,
      name: 'Gaming Monitor',
      image: 'assets/images/Wired-Keyboard.jpeg',
      discount: '-15%',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      numberOfRatings: 300,
    },
  ];

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

  // Emit navigation events
  onNavigate(direction: string) {
    this.navigateCarousel.emit(direction);
  }
}
