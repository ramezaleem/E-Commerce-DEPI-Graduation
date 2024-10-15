import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() products: any[] = []; // Accept product data from parent component
  @Input() showOverlay: boolean = false; // New property to control overlay visibility

  currentIndex: number = 0;
  itemsPerPage: number = 3;
  translateX: number = 0;

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

  updateTranslateX() {
    this.translateX = -this.currentIndex * (100 / this.itemsPerPage);
  }
}
