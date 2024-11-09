import { Component, OnInit } from '@angular/core';
import { IallProducts } from '../interfaces/interface-all-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartproducts:any[]=[];
  totalPrice:any =0;


  ngOnInit(): void {
    this.getProductsInCarts();

  }

  getProductsInCarts(){
    if('cart' in localStorage){
      this.cartproducts = JSON.parse(localStorage.getItem('cart')!)
    }
    this.getTotalPrice();

  }

  getTotalPrice(){
    this.totalPrice=0;
    for(let i =0 ; i < this.cartproducts.length;i++){
      this.totalPrice += this.cartproducts[i].item.price * this.cartproducts[i].quantity;
    }
  }
  detectChange(){
    this.getTotalPrice()
  }
  delete(index:any){
    this.cartproducts.splice(index,1);
    localStorage.setItem('cart' , JSON.stringify(this.cartproducts))
    this.getTotalPrice()
  }
  
}
