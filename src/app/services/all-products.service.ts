import { Injectable } from '@angular/core';
import { IallProducts } from '../interfaces/interface-all-product';
import { allProducts } from '../../data/products';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  allProducts: IallProducts[] = allProducts;
  getproducts(category:string):any{
    if(category === "all"){
      return this.allProducts;
    }
    return this.allProducts.filter(product=> product.category === category )
  }
}
