import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CartService } from '../../../cart-service.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor(private router : Router){}
  @Input() product: any ;
  @Input() showOverlay: boolean = false;
  @Output() item = new EventEmitter ();
  quantity :number = 1;    // init value with 1 amount
  showBtn : boolean = false ;
  getStars(rating: number): (boolean | null)[] {
    return Array.from({ length: 5 }, (_, index) => {
      if (rating >= index + 1) return true;
      if (rating >= index + 0.5) return null;
      return false;
    });
  }

  // constructor(private cartService: CartService) {}
  // addToCart() {
  //   this.cartService.addToCart({
  //     image: this.product.image,
  //     name: this.product.name,
  //     price: Math.floor(this.product.price),
  //   });
  // }
  add(){
    this.item.emit({
      item : this.product,
      quantity : this.quantity
    })
  }
ngOnInit(): void {
}
route(){
  this.router.navigate([
    '/detailes/',
    this.product.category,
    this.product.id,
    this.product.name,
    this.product.image,
    this.product.price,
    this.product.rating,
    this.product.numberOfRatings,
    ])
}

}
