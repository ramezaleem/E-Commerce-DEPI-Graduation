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

  timerVisible: boolean = true;
  countdown: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
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
}
