import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-explore-products',
  templateUrl: './home-explore-products.component.html',
  styleUrl: './home-explore-products.component.scss',
})
export class HomeExploreProductsComponent {
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   items: 4.5,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 2,
  //     },
  //     740: {
  //       items: 3,
  //     },
  //     940: {
  //       items: 4,
  //     },
  //     1200: {
  //       items: 4,
  //     },
  //   },
  //   nav: true,
  // };

  products = [
    {
      id: 1,
      name: 'Bread Dry Dog Food',
      image: 'assets/images/PlayStation.png',
      discount: '-40%',
      price: 100,
      originalPrice: null,
      rating: 3,
      numberOfRatings: 150,
    },
    {
      id: 2,
      name: 'Canon Camera',
      image: 'assets/images/Wired-Keyboard.jpeg',
      discount: '-35%',
      price: 360,
      originalPrice: null,
      rating: 5.0,
      numberOfRatings: 200,
    },
    {
      id: 3,
      name: 'Gaming Laptop',
      image: 'assets/images/Gaming-Monitor.jpg',
      discount: '-25%',
      price: 700,
      originalPrice: null,
      rating: 4.0,
      numberOfRatings: 150,
    },
    {
      id: 4,
      name: 'S-Series Comfort Chair',
      image: 'assets/images/Chair.jpeg',
      discount: '-15%',
      price: 500, // Adjusted to a more realistic price
      originalPrice: null,
      rating: 4.8,
      numberOfRatings: 300,
    },
    {
      id: 5,
      name: 'Logitech Gaming Headset',
      image: 'assets/images/Headset-Gaming.jpeg',
      discount: '-30%',
      price: 960,
      originalPrice: null,
      rating: 4.7,
      numberOfRatings: 250,
    },
    {
      id: 6,
      name: 'Razer BlackWidow Keyboard',
      image: 'assets/images/Razer-Keyboard.jpeg',
      discount: '-20%',
      price: 1160,
      originalPrice: null,
      rating: 4.6,
      numberOfRatings: 180,
    },
    {
      id: 7,
      name: 'ASUS 27" Gaming Monitor',
      image: 'assets/images/ASUS-Gaming-Monitor.jpeg',
      discount: '-15%',
      price: 660,
      originalPrice: null,
      rating: 4.5,
      numberOfRatings: 210,
    },
    {
      id: 8,
      name: 'DXRacer Gaming Chair',
      image: 'assets/images/Gaming-Chair.jpeg',
      discount: '-25%',
      price: 660,
      originalPrice: null,
      rating: 4.8,
      numberOfRatings: 320,
    },
  ];
}
