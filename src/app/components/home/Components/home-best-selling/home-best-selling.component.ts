import { Component, EventEmitter, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeBestSellingService } from '../../../../services/home-best-selling.service';

@Component({
  selector: 'app-home-best-selling',
  templateUrl: './home-best-selling.component.html',
  styleUrl: './home-best-selling.component.scss',
})
export class HomeBestSellingComponent {
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
    nav: true,
  };
  // Product data
  // products = [
  //   {
  //     id: 1,
  //     name: 'The north coot',
  //     image: 'assets/images/north-coot.jpeg',
  //     discount: '-40%',
  //     price: 260,
  //     originalPrice: 360,
  //     rating: 4.5,
  //     numberOfRatings: 150,
  //   },
  //   {
  //     id: 2,
  //     name: 'Gucci duffle bag',
  //     image: 'assets/images/Gucci-bag.jpeg',
  //     discount: '-35%',
  //     price: 960,
  //     originalPrice: 1160,
  //     rating: 5.0,
  //     numberOfRatings: 200,
  //   },
  //   {
  //     id: 3,
  //     name: 'RGB Liquid CPU Cooler',
  //     image: 'assets/images/RGB-Liquid-CPU-Cooler.jpeg',
  //     discount: '-25%',
  //     price: 160,
  //     originalPrice: 170,
  //     rating: 4.0,
  //     numberOfRatings: 150,
  //   },
  //   {
  //     id: 4,
  //     name: 'Small BookSelf',
  //     image: 'assets/images/BookShelf.jpeg',
  //     discount: '-15%',
  //     price: 360,
  //     originalPrice: '370',
  //     rating: 4.8,
  //     numberOfRatings: 300,
  //   },
  // ];
  constructor(private productsServ : HomeBestSellingService){}
  products=this.productsServ.products;
}
