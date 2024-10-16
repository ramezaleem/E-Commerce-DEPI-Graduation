import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-product-component',
  templateUrl: './second-product-component.component.html',
  styleUrl: './second-product-component.component.scss',
})
export class SecondProductComponentComponent {
  @Input() product: any;
  @Input() showOverlay: boolean = false;

  getStars(rating: number): (boolean | null)[] {
    return Array.from({ length: 5 }, (_, index) => {
      if (rating >= index + 1) return true;
      if (rating >= index + 0.5) return null;
      return false;
    });
  }
}
