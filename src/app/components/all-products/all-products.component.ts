import { Component, HostListener, Input } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent {
  @Input() showOverlay: boolean = false;
  // category:string='';
  getStars(rating: number): (boolean | null)[] {
    return Array.from({ length: 5 }, (_, index) => {
      if (rating >= index + 1) return true;
      if (rating >= index + 0.5) return null;
      return false;
    });
  }
  constructor(private prdServ: AllProductsService) {}
  allProducts = this.prdServ.allProducts


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



  cartproducts:any[]=[] ;  // empty array to Recieve data
  getproduct(event:any){
    // console.log(event);
    if("cart" in localStorage){
      this.cartproducts = JSON.parse(localStorage.getItem('cart')!);
      let isExist = this.cartproducts.find( item => item.item.id === event.item.id && item.item.category === event.item.category);
      if(isExist){
        alert('this product is aleardy in your cart .');
      }else{
        this.cartproducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartproducts))
      }
    }
    else{
      this.cartproducts.push(event);
      localStorage.setItem('cart' , JSON.stringify(this.cartproducts))
    }

  }
  ngOnDestroy() {
    clearInterval(this.countdown);
  }
}
