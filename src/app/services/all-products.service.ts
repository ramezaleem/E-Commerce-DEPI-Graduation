import { Injectable } from '@angular/core';
import { IallProducts } from '../interfaces/interface-all-product';
import { ExploreOurProductsService } from './explore-our-products.service';
import { allProducts } from '../../data/products';
import { FlashSalesService } from './flash-sales.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  allProducts: IallProducts[] = allProducts;

  constructor(private exploreServ :ExploreOurProductsService,
    private flashSalesProds:FlashSalesService,
    private router : Router

  ) {
    // this.allProducts = [...this.allProducts,...flashSalesProds.products]
    console.log(this.exploreServ.getProducts());
  }


  getproducts(category:string):any{
    if(category === "all"){
      return this.allProducts;
    }
    return this.allProducts.filter(product=> product.category === category )
  }
}
