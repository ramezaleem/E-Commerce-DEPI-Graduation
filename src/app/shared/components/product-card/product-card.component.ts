import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  currentIndex: number = 0;
  itemsPerPage: number = 3;
  translateX: number = 0;

  products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'assets/images/PlayStation.png',
      discount: '-40%',
      price: 299.99,
      originalPrice: 499.99,
      rating: 4.5,
      numberOfRatings: 150,
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
    },
    {
      id: 3,
      name: 'Wireless Mouse',
      image: 'assets/images/Wired-Keyboard.jpeg',
      discount: '-25%',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.0,
      numberOfRatings: 150,
    },
    {
      id: 4,
      name: 'Gaming Monitor',
      image: 'assets/images/Wired-Keyboard.jpeg',
      discount: '-15%',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      numberOfRatings: 300,
    },
  ];

  constructor() {}

  ngOnInit() {
    this.updateTranslateX();
  }

  getChunks(arr: any[], chunkSize: number) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  getStars(rating: number): (boolean | null)[] {
    const stars: (boolean | null)[] = [];
    const totalStars = 5;
    for (let i = 0; i < totalStars; i++) {
      if (rating >= i + 1) {
        stars.push(true);
      } else if (rating >= i + 0.5) {
        stars.push(null);
      } else {
        stars.push(false);
      }
    }
    return stars;
  }

  navigateCarousel(direction: string) {
    if (
      direction === 'right' &&
      this.currentIndex < this.products.length - this.itemsPerPage
    ) {
      this.currentIndex++;
    } else if (direction === 'left' && this.currentIndex > 0) {
      this.currentIndex--;
    }
    this.updateTranslateX();
  }

  updateTranslateX() {
    this.translateX = -this.currentIndex * (100 / this.itemsPerPage);
  }

  ngOnDestroy() {}
}
