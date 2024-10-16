import { Injectable } from '@angular/core';
import { IallProducts } from '../interfaces/interface-all-product';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  constructor() { }
  allProducts : IallProducts[] = [
    //start Home & Lifestyle prds
    {
      id: 1,
      name: 'The north coot',
      image: 'assets/images/north-coot.jpeg',
      discount: '-40%',
      price: 260,
      originalPrice: 360,
      rating: 4.5,
      numberOfRatings: 150,
      category:'Home & Lifestyle'
    },
    {
      id: 2,
      name: 'Gucci duffle bag',
      image: 'assets/images/Gucci-bag.jpeg',
      discount: '-35%',
      price: 960,
      originalPrice: 1160,
      rating: 5.0,
      numberOfRatings: 200,
      category:'Home & Lifestyle'
    },
    {
      id: 3,
      name: 'RGB Liquid CPU Cooler',
      image: 'assets/images/RGB-Liquid-CPU-Cooler.jpeg',
      discount: '-25%',
      price: 160,
      originalPrice: 170,
      rating: 4.0,
      numberOfRatings: 150,
      category:'Home & Lifestyle'
    },
    {
      id: 4,
      name: 'Small BookSelf',
      image: 'assets/images/BookShelf.jpeg',
      discount: '-15%',
      price: 360,
      originalPrice: 370,
      rating: 4.8,
      numberOfRatings: 300,
      category:'Home & Lifestyle'
    },
    // end Home & Lifestyle prds
    // **************************************
    // start Elctronics prds
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      image: 'assets/images/PlayStation.png',
      discount: '-40%',
      price: 299.99,
      originalPrice: 499.99,
      rating: 4.5,
      numberOfRatings: 150,
      category:'Electronics'
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
      category:'Electronics'
    },
    {
      id: 3,
      name: 'Ips LCD Gaming Monitor',
      image: 'assets/images/Gaming-Monitor.jpg',
      discount: '-25%',
      price: 189.99, // Adjusted to a more realistic price
      originalPrice: 249.99,
      rating: 4.0,
      numberOfRatings: 150,
      category:'Electronics'
    },
    {
      id: 4,
      name: 'S-Series Comfort Chair',
      image: 'assets/images/Chair.jpeg',
      discount: '-15%',
      price: 212.49, // Adjusted to a more realistic price
      originalPrice: 249.99,
      rating: 4.8,
      numberOfRatings: 300,
      category:'Electronics'
    },
    {
      id: 5,
      name: 'Logitech Gaming Headset',
      image: 'assets/images/Headset-Gaming.jpeg',
      discount: '-30%',
      price: 139.99,
      originalPrice: 199.99,
      rating: 4.7,
      numberOfRatings: 250,
      category:'Electronics'
    },
    {
      id: 6,
      name: 'Razer BlackWidow Keyboard',
      image: 'assets/images/Razer-Keyboard.jpeg',
      discount: '-20%',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      numberOfRatings: 180,
      category:'Electronics'
    },
    {
      id: 7,
      name: 'ASUS 27" Gaming Monitor',
      image: 'assets/images/ASUS-Gaming-Monitor.jpeg',
      discount: '-15%',
      price: 339.99,
      originalPrice: 399.99,
      rating: 4.5,
      numberOfRatings: 210,
      category:'Electronics'
    },
    {
      id: 8,
      name: 'DXRacer Gaming Chair',
      image: 'assets/images/Gaming-Chair.jpeg',
      discount: '-25%',
      price: 249.99,
      originalPrice: 329.99,
      rating: 4.8,
      numberOfRatings: 320,
      category:'Electronics'
    },
    // end  Elctronics prds
    //
  ]
}
