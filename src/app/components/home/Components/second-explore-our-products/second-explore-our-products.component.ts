import { Component, EventEmitter, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllProductsService } from '../../../../services/all-products.service';
import { Router } from '@angular/router';
import { IallProducts } from '../../../../interfaces/interface-all-product';

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

  constructor(
    private allServ : AllProductsService,
    private router :Router
  ) {}
  products =  this.allServ.getproducts('Baby’s & Toys');;


  showProducts(){
    this.router.navigate(['/BabysToys']);
  }

    cartproducts:any[]=[] ;  // empty array to Recieve data
  getproduct(event:any){
    // console.log(event);
    if("cart" in localStorage){
      this.cartproducts = JSON.parse(localStorage.getItem('cart')!);
      let isExist = this.cartproducts.find(item=> item.item.id === event.item.id && item.item.category === event.item.category);
      if(isExist){
        alert('this product is aleardy in your cart .');
      }else{
        this.cartproducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartproducts))
      }
    }
    else{
      this.cartproducts.push(event);
      localStorage.setItem('cart' , JSON.stringify(this.cartproducts))
    }

  }
}
