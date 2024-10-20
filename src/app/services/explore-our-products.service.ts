import { Injectable } from '@angular/core';
import { IExploreOurProducts } from '../interfaces/interface-explore-our-products';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExploreOurProductsService {
  constructor( ) {}

  Products: IExploreOurProducts[] = [
    {
      id: 1,
      name: 'Dry Dog Food',
      image: 'assets/images/ex1.png',
      discount: '-40%',
      price: 100,
      originalPrice: null, // Set to null
      rating: 4.5,
      numberOfRatings: 150,
      category:'exploreOurProducts'
    },
    {
      id: 2,
      name: 'Canon Camera',
      image: 'assets/images/ex2.png',
      discount: '-35%',
      price: 360,
      originalPrice: null, // Set to null
      rating: 5.0,
      numberOfRatings: 200,
      category:'exploreOurProducts'
    },
    {
      id: 3,
      name: 'ASUS Gaming Laptop',
      image: 'assets/images/ex3.png',
      discount: '-25%',
      price: 700,
      originalPrice: null, // Set to null
      rating: 4.0,
      numberOfRatings: 150,
      category:'exploreOurProducts'
    },
    {
      id: 4,
      name: 'Product Set',
      image: 'assets/images/ex4.png',
      discount: '-15%',
      price: 500,
      originalPrice: null, // Set to null
      rating: 4.8,
      numberOfRatings: 300,
      category:'exploreOurProducts'
    },
    {
      id: 5,
      name: 'Kids Electric Car',
      image: 'assets/images/ex5.png',
      discount: '-15%',
      price: 960,
      originalPrice: null, // Set to null
      rating: 4.8,
      numberOfRatings: 300,
      category:'exploreOurProducts'
    },
    {
      id: 6,
      name: 'Zoom Soccer Cleats',
      image: 'assets/images/ex6.png',
      discount: '-15%',
      price: 1160,
      originalPrice: null, // Set to null
      rating: 4.8,
      numberOfRatings: 300,
      category:'exploreOurProducts'
    },
    {
      id: 7,
      name: 'Shooter USB Gamepad',
      image: 'assets/images/ex7.png',
      discount: '-15%',
      price: 660,
      originalPrice: null, // Set to null
      rating: 4.8,
      numberOfRatings: 300,
      category:'exploreOurProducts'
    },
    {
      id: 8,
      name: 'Quilted Satin Jacket',
      image: 'assets/images/ex6 (2).png',
      discount: '-15%',
      price: 660,
      originalPrice: null, // Set to null
      rating: 4.8,
      numberOfRatings: 300,
      category:'exploreOurProducts'
    },
  ];
  getProducts(){
    return this.Products;
  }
}
