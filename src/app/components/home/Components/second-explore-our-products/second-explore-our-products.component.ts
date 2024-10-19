import { Component, EventEmitter, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-second-explore-our-products',
  templateUrl: './second-explore-our-products.component.html',
  styleUrl: './second-explore-our-products.component.scss',
})
export class SecondExploreOurProductsComponent {
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

  products = [
    {
      id: 1,
      name: 'Dry Dog Food',
      image: 'assets/images/ex1.png',
      discount: '-40%',
      price: 260,
      originalPrice: 360,
      rating: 4.5,
      numberOfRatings: 150,
    },
    {
      id: 2,
      name: 'Canon Camera',
      image: 'assets/images/ex2.png',
      discount: '-35%',
      price: 960,
      originalPrice: 1160,
      rating: 5.0,
      numberOfRatings: 200,
    },
    {
      id: 3,
      name: 'ASUS Gaming Laptop',
      image: 'assets/images/ex3.png',
      discount: '-25%',
      price: 160,
      originalPrice: 170,
      rating: 4.0,
      numberOfRatings: 150,
    },
    {
      id: 4,
      name: 'Product Set',
      image: 'assets/images/ex4.png',
      discount: '-15%',
      price: 360,
      originalPrice: '370',
      rating: 4.8,
      numberOfRatings: 300,
    },
    {
      id: 5,
      name: 'Kids Electric Car',
      image: 'assets/images/ex5.png',
      discount: '-15%',
      price: 360,
      originalPrice: '370',
      rating: 4.8,
      numberOfRatings: 300,
    },
    {
      id: 6,
      name: 'Zoom Soccer Cleats',
      image: 'assets/images/ex6.png',
      discount: '-15%',
      price: 360,
      originalPrice: '370',
      rating: 4.8,
      numberOfRatings: 300,
    },
    {
      id: 7,
      name: 'Shooter USB Gamepad',
      image: 'assets/images/ex7.png',
      discount: '-15%',
      price: 360,
      originalPrice: '370',
      rating: 4.8,
      numberOfRatings: 300,
    },
    {
      id: 7,
      name: 'Quilted Satin Jacket',
      image: 'assets/images/ex6 (2).png',
      discount: '-15%',
      price: 360,
      originalPrice: '370',
      rating: 4.8,
      numberOfRatings: 300,
    },
  ];
}
