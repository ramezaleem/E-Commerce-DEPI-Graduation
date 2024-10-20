import { Component, HostListener, Input } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
@Component({
  selector: 'app-own-category-products',
  templateUrl: './own-category-products.component.html',
  styleUrl: './own-category-products.component.scss'
})
export class OwnCategoryProductsComponent {
  // @Input() showOverlay: boolean = false;

  // getStars(rating: number): (boolean | null)[] {
  //   return Array.from({ length: 5 }, (_, index) => {
  //     if (rating >= index + 1) return true;
  //     if (rating >= index + 0.5) return null;
  //     return false;
  //   });
  // }
  constructor(private prdServ: AllProductsService) {}
  // category!:string
  allProducts = this.prdServ.getproducts('Woman’s Fashion');

  // showCategory(category:string):any{
  //   this.prdServ.getproducts(category);
  // }

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
