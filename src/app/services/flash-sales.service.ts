import { Injectable } from '@angular/core';
import { IprdFlashSales } from '../interfaces/interface-flash-sales-products';
import { IallProducts } from '../interfaces/interface-all-product';

@Injectable({
  providedIn: 'root',
})
export class FlashSalesService {
  constructor() {}
  // products: IallProducts[] = [
  //   {
  //     id: 1,
  //     name: 'HAVIT HV-G92 Gamepad',
  //     image: 'assets/images/PlayStation.png',
  //     discount: '-40%',
  //     price: 299.99,
  //     originalPrice: '$499.99', // Added $
  //     rating: 4.5,
  //     numberOfRatings: 1500,
  //   },
  //   {
  //     id: 2,
  //     name: 'Ak-900 Wired Keyboard',
  //     image: 'assets/images/Wired-Keyboard.jpeg',
  //     discount: '-35%',
  //     price: 49.99,
  //     originalPrice: '$79.99', // Added $
  //     rating: 5.0,
  //     numberOfRatings: 200,
  //   },
  //   {
  //     id: 3,
  //     name: 'Ips LCD Gaming Monitor',
  //     image: 'assets/images/Gaming-Monitor.jpg',
  //     discount: '-25%',
  //     price: 189.99,
  //     originalPrice: '$249.99', // Added $
  //     rating: 4.0,
  //     numberOfRatings: 150,
  //   },
  //   {
  //     id: 4,
  //     name: 'S-Series Comfort Chair',
  //     image: 'assets/images/Chair.jpeg',
  //     discount: '-15%',
  //     price: 212.49,
  //     originalPrice: '$249.99', // Added $
  //     rating: 4.8,
  //     numberOfRatings: 300,
  //   },
  //   {
  //     id: 5,
  //     name: 'Logitech Gaming Headset',
  //     image: 'assets/images/Headset-Gaming.jpeg',
  //     discount: '-30%',
  //     price: 139.99,
  //     originalPrice: '$199.99', // Added $
  //     rating: 4.7,
  //     numberOfRatings: 250,
  //   },
  //   {
  //     id: 6,
  //     name: 'Razer BlackWidow Keyboard',
  //     image: 'assets/images/Razer-Keyboard.jpeg',
  //     discount: '-20%',
  //     price: 79.99,
  //     originalPrice: '$99.99', // Added $
  //     rating: 4.6,
  //     numberOfRatings: 180,
  //   },
  //   {
  //     id: 7,
  //     name: 'ASUS 27" Gaming Monitor',
  //     image: 'assets/images/ASUS-Gaming-Monitor.jpeg',
  //     discount: '-15%',
  //     price: 339.99,
  //     originalPrice: '$399.99', // Added $
  //     rating: 4.5,
  //     numberOfRatings: 210,
  //   },
  //   {
  //     id: 8,
  //     name: 'DXRacer Gaming Chair',
  //     image: 'assets/images/Gaming-Chair.jpeg',
  //     discount: '-25%',
  //     price: 249.99,
  //     originalPrice: '$329.99', // Added $
  //     rating: 4.8,
  //     numberOfRatings: 320,
  //   },
  // ];
}
