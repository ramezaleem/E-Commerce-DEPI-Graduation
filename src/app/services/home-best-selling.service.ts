import { Injectable } from '@angular/core';
import { IprdHomeBestSelling } from '../interfaces/interface-home-best-selling';

@Injectable({
  providedIn: 'root',
})
export class HomeBestSellingService {
  constructor() {}
  products: IprdHomeBestSelling[] = [
    {
      id: 1,
      name: 'The north coot',
      image: 'assets/images/north-coot.jpeg',
      discount: '-40%',
      price: 260,
      originalPrice: '$360', // Added $
      rating: 4.5,
      numberOfRatings: 150,
    },
    {
      id: 2,
      name: 'Gucci duffle bag',
      image: 'assets/images/Gucci-bag.jpeg',
      discount: '-35%',
      price: 960,
      originalPrice: '$1160', // Added $
      rating: 5.0,
      numberOfRatings: 200,
    },
    {
      id: 3,
      name: 'RGB Liquid CPU Cooler',
      image: 'assets/images/RGB-Liquid-CPU-Cooler.jpeg',
      discount: '-25%',
      price: 160,
      originalPrice: '$170', // Added $
      rating: 4.0,
      numberOfRatings: 150,
    },
    {
      id: 4,
      name: 'Small BookSelf',
      image: 'assets/images/BookShelf.jpeg',
      discount: '-15%',
      price: 360,
      originalPrice: '$370', // Added $
      rating: 4.8,
      numberOfRatings: 300,
    },
  ];
}
