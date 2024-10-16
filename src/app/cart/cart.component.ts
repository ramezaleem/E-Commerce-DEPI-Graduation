import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  count: number = 1;
  totalPrice: string = '$500';

  increment(): void {
    this.count++;
    this.calculateTotal();
  }

  decrement(): void {
    if (this.count > 1) {
      this.count--;
      this.calculateTotal();
    }
  }

  calculateTotal(): void {
    const pricePerPieceText =
      document.querySelector('.price')?.textContent?.replace('$', '') || '0';
    const pricePerPiece: number = parseFloat(pricePerPieceText);

    if (isNaN(pricePerPiece)) {
      alert('Please enter a valid price.');
      return;
    }

    const totalPrice: number = this.count * pricePerPiece;
    this.totalPrice = `$${totalPrice.toFixed(2)}`;
  }
}
