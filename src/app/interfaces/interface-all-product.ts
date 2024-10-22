export interface  IallProducts{
  id:number;
  name:string;
  image:string;
  discount:string;
  price:number;
  originalPrice:string |null ;
  rating:number;
  numberOfRatings:number;
  category? : string
}
