import { Component, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProductsService } from '../../services/all-products.service';
import { CartService } from '../../cart-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit, OnDestroy {
  @Input() showOverlay: boolean = false;
  
  filteredProducts: any[] = [];
  allProducts: any[] = [];
  searchQuery: string = '';
  showButton = false;
  timerVisible: boolean = true;
  countdown: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(
    private prdServ: AllProductsService, 
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.allProducts = this.prdServ.allProducts;
    
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
      this.filterProducts();
    });

    this.startCountdown();
  }

  filterProducts(): void {
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      this.filteredProducts = this.allProducts.filter(p => 
        p.name.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query))
      );
    } else {
      this.filteredProducts = [...this.allProducts];
    }
  }

  startCountdown(): void {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 14);

    this.countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        clearInterval(this.countdown);
        this.timerVisible = false;
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }

  getproduct(event: any): void {
    this.cartService.addToCart(event.item, event.quantity);
  }

  ngOnDestroy(): void {
    if (this.countdown) {
      clearInterval(this.countdown);
    }
  }
}
