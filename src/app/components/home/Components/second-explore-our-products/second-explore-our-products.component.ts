import { Component, EventEmitter, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ExploreOurProductsService } from '../../../../services/explore-our-products.service';

@Component({
  selector: 'app-second-explore-our-products',
  templateUrl: './second-explore-our-products.component.html',
  styleUrl: './second-explore-our-products.component.scss',
})
export class SecondExploreOurProductsComponent {
  @Output() navigateCarousel: EventEmitter<string> = new EventEmitter();

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 4.5,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1200: {
        items: 4.5,
      },
    },
    nav: false,
  };

  constructor(private productServ: ExploreOurProductsService) {}
  products = this.productServ.Products;
}
