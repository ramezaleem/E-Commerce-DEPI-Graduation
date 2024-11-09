import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IallProducts } from '../interfaces/interface-all-product';
import { AllProductsService } from '../services/all-products.service';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.scss'
})
export class ProductDetailesComponent implements OnInit{
  // productId: string | null = null;

  getStars(rating: number): (boolean | null)[] {
    return Array.from({ length: 5 }, (_, index) => {
      if (rating >= index + 1) return true;
      if (rating >= index + 0.5) return null;
      return false;
    });
  }
  products : IallProducts[]=[];
  id!:number;
  name!:string;
  image!:string;
  discount!:string;
  price!:number;
  originalPrice!:string |null ;
  rating!:number;
  numberOfRatings!:number;
  category? : string;

  constructor(private route: ActivatedRoute,
    private productsServ:AllProductsService
  ) {
    this.products = this.productsServ.getproducts(this.category!)
    console.log(this.products);
    console.log(this.route);
  }
  ngOnInit(): void {
    this.route.params.subscribe((item : any)=>{
      this.id = +item.id ;
      this.name = item.name ;
      this.image = item.image ;
      this.discount = item.discount ;
      this.price = +item.price ;
      this.originalPrice = item.originalPrice ;
      this.rating = +item.rating ;
      this.numberOfRatings = +item.numberOfRatings ;
      this.category = item.category ;

    });
  }


}

