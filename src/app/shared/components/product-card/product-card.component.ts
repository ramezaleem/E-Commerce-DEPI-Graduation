import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() products: any[] = [];
  @Input() showOverlay: boolean = false;

  currentIndex: number = 0;
  itemsPerPage: number = 3;
  translateX: number = 0;

  constructor() {}

  ngOnInit() {
    this.updateTranslateX();
  }

  getChunks(arr: any[], chunkSize: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  getStars(rating: number): (boolean | null)[] {
    return Array.from({ length: 5 }, (_, index) => {
      if (rating >= index + 1) return true;
      if (rating >= index + 0.5) return null;
      return false;
    });
  }

  updateTranslateX() {
    this.translateX = -this.currentIndex * (100 / this.itemsPerPage);
  }

  nextSlide() {
    if (
      this.currentIndex <
      Math.ceil(this.products.length / this.itemsPerPage) - 1
    ) {
      this.currentIndex++;
      this.updateTranslateX();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTranslateX();
    }
  }
}
