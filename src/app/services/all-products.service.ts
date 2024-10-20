import { Injectable } from '@angular/core';
import { IallProducts } from '../interfaces/interface-all-product';
import { ExploreOurProductsService } from './explore-our-products.service';

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  constructor(private exploreServ :ExploreOurProductsService) {
    console.log(this.exploreServ.getProducts());
  }

  allProducts: IallProducts[] = [
    //start mens products
    {
      id: 1,
      name: 'MEN Yarn Fleece Full-Zip Jacket',
      image: '/assets/images/mens1.jpg',
      discount: '-17%',
      price: 58.99,
      originalPrice: '$61.99',
      rating: 4.5,
      numberOfRatings: 220,
      category: 'Men’s Fashion',
    },
    {
      id: 2,
      name: 'Mens Winter Leathers Jackets',
      image: '/assets/images/mens2.jpg',
      discount: '-17%',
      price: 48.99,
      originalPrice: '$74.99',
      rating: 3.5,
      numberOfRatings: 120,
      category: 'Men’s Fashion',
    },
    {
      id: 3,
      name: 'Mens Winter Leathers Jackets',
      image: '/assets/images/mens3.jpg',
      discount: '-17%',
      price: 48.99,
      originalPrice: '$74.99',
      rating: 4,
      numberOfRatings: 150,
      category: 'Men’s Fashion',
    },
    {
      id: 4,
      name: "Men's Leather Formal Wear shoes",
      image: '/assets/images/mens4.jpg',
      discount: '-17%',
      price: 50.99,
      originalPrice: '$67.99',
      rating: 4,
      numberOfRatings: 350,
      category: 'Men’s Fashion',
    },
    {
      id: 5,
      name: "Casual Men's Brown shoes",
      image: '/assets/images/mens5.jpg',
      discount: '-17%',
      price: 78.99,
      originalPrice: '$85.99', // Fixed typo
      rating: 4,
      numberOfRatings: 399,
      category: 'Men’s Fashion',
    },
    {
      id: 6,
      name: "Casual Men's Brown shoes",
      image: '/assets/images/mens6.jpg',
      discount: '-17%',
      price: 99.99,
      originalPrice: '$107.15',
      rating: 4,
      numberOfRatings: 399,
      category: 'Men’s Fashion',
    },
    {
      id: 7,
      name: 'Trekking & Running Shoes - black',
      image: '/assets/images/mens7.jpg',
      discount: '-17%',
      price: 58.99,
      originalPrice: '$64.99',
      rating: 4,
      numberOfRatings: 150,
      category: 'Men’s Fashion',
    },
    {
      id: 8,
      name: 'Pure Garment Dyed Cotton Shirt',
      image: '/assets/images/mens8.jpg',
      discount: '-17%',
      price: 45.99,
      originalPrice: '$56.99',
      rating: 4,
      numberOfRatings: 150,
      category: 'Men’s Fashion',
    },
    {
      id: 9,
      name: "men's hoodies t-shirt",
      image: '/assets/images/mens9.jpg',
      discount: '-17%',
      price: 99.99,
      originalPrice: '$160.99',
      rating: 5,
      numberOfRatings: 150,
      category: 'Men’s Fashion',
    },
    // end mens products
    // start womens products
    {
      id: 1,
      name: 'Relaxed Shirt',
      image: '/assets/images/womens1.jpg',
      discount: '-20%',
      price: 45.99,
      originalPrice: '$62.99',
      rating: 4,
      numberOfRatings: 450,
      category: 'Woman’s Fashion',
    },
    {
      id: 2,
      name: 'Girls pnk Embro design',
      image: '/assets/images/womens2.jpg',
      discount: '-20%',
      price: 61.99,
      originalPrice: '$80.99', // Added $
      rating: 5,
      numberOfRatings: 490,
      category: 'Woman’s Fashion',
    },
    {
      id: 3,
      name: 'Black Floral Wrap Midi Skirt',
      image: '/assets/images/womens3.jpg',
      discount: '-20%',
      price: 71.99,
      originalPrice: '$120.99', // Added $
      rating: 3.2,
      numberOfRatings: 90,
      category: 'Woman’s Fashion',
    },
    {
      id: 4,
      name: 'Womens Party Wear Shoes',
      image: '/assets/images/womens4.jpg',
      discount: '-20%',
      price: 56.99,
      originalPrice: '$90.99', // Added $
      rating: 4.2,
      numberOfRatings: 280,
      category: 'Woman’s Fashion',
    },
    {
      id: 5,
      name: 'girls t-shirt',
      image: '/assets/images/womens5.jpg',
      discount: '-20%',
      price: 36.99,
      originalPrice: '$50.99', // Added $
      rating: 4.5,
      numberOfRatings: 680,
      category: 'Woman’s Fashion',
    },
    // more products...

    //start Home & Lifestyle prds
    {
      id: 1,
      name: 'The north coot',
      image: 'assets/images/north-coot.jpeg',
      discount: '-40%',
      price: 260,
      originalPrice: '$360', // Added $
      rating: 4.5,
      numberOfRatings: 150,
      category: 'Home & Lifestyle',
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
      category: 'Home & Lifestyle',
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
      category: 'Home & Lifestyle',
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
      category: 'Home & Lifestyle',
    },
    // more products...

    //start Elctronics prds
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      image: 'assets/images/PlayStation.png',
      discount: '-40%',
      price: 299.99,
      originalPrice: '$499.99', // Added $
      rating: 4.5,
      numberOfRatings: 150,
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Ak-900 Wired Keyboard',
      image: 'assets/images/Wired-Keyboard.jpeg',
      discount: '-35%',
      price: 49.99,
      originalPrice: '$79.99', // Added $
      rating: 5.0,
      numberOfRatings: 200,
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Ips LCD Gaming Monitor',
      image: 'assets/images/Gaming-Monitor.jpg',
      discount: '-25%',
      price: 189.99,
      originalPrice: '$249.99', // Added $
      rating: 4.0,
      numberOfRatings: 150,
      category: 'Electronics',
    },
    {
      id: 4,
      name: 'S-Series Comfort Chair',
      image: 'assets/images/Chair.jpeg',
      discount: '-15%',
      price: 212.49,
      originalPrice: '$249.99', // Added $
      rating: 4.8,
      numberOfRatings: 300,
      category: 'Electronics',
    },
    {
      id: 5,
      name: 'Logitech Gaming Headset',
      image: 'assets/images/Headset-Gaming.jpeg',
      discount: '-30%',
      price: 139.99,
      originalPrice: '$199.99', // Added $
      rating: 4.7,
      numberOfRatings: 250,
      category: 'Electronics',
    },
    {
      id: 6,
      name: 'Razer BlackWidow Keyboard',
      image: 'assets/images/Razer-Keyboard.jpeg',
      discount: '-20%',
      price: 79.99,
      originalPrice: '$99.99', // Added $
      rating: 4.6,
      numberOfRatings: 180,
      category: 'Electronics',
    },
    {
      id: 7,
      name: 'ASUS 27" Gaming Monitor',
      image: 'assets/images/ASUS-Gaming-Monitor.jpeg',
      discount: '-22%',
      price: 329.99,
      originalPrice: '$419.99', // Added $
      rating: 4.9,
      numberOfRatings: 350,
      category: 'Electronics',
    },

    //start explore our products

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

     //start explore our products
  ];

  getproducts(category:string):any{
    if(category === "all"){
      return this.allProducts;
    }
    return this.allProducts.filter(product=> product.category === category )
  }
}
