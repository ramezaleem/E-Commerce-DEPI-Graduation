import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AllProductsService } from '../../../../services/all-products.service';
import { Router } from '@angular/router';
import { IallProducts } from '../../../../interfaces/interface-all-product';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
})
export class HomeCarouselComponent {
  heroImgActiv: string = '/assets/images/hero.jpg';
  heroImg2: string =
    'https://img.freepik.com/premium-photo/variety-lenses-your-phone-allegorical-illustration-variety-popularity-mobile-photography-technology_407240-1390.jpg?ga=GA1.1.508687790.1726598164&semt=ais_hybrid';
  heroImg3: string =
    'https://img.freepik.com/premium-photo/phone-top-view-with-white-screen-concrete-table-hard-light-shadows_150455-1148.jpg?ga=GA1.1.508687790.1726598164&semt=ais_hybrid';
  heroImg4: string =
    'https://img.freepik.com/premium-photo/mockup-photo-mobile-phone_34048-1746.jpg?ga=GA1.1.508687790.1726598164&semt=ais_hybrid';
  heroImg5: string =
    'https://www.optionstheedge.com/sites/default/files/field/featured-image/2020/iphone_12.jpg';

  constructor(private productServ : AllProductsService,
              private router : Router
  ){}
  // showproducts(category:string):any{
  // this.router.navigate(['/allProducts'])
  //   this.productServ.getproducts(category);
  // }



  products: IallProducts[] = [];
  selectedCategory: string = 'all'; // Default to all products


  ngOnInit(): void {
    // this.loadProducts();
  }

  getproducts(category:string):any{
    this.products = this.productServ.getproducts(category);
    this.router.navigate(['/allProducts'])
    console.log(this.products);
  }

  // getcategory(event:any){
  //   let value = event.target.value
  //   console.log(value + 'valueeeeeeeeeeeeee');

  // }

  // // Method to load products based on the selected category
  // loadProducts(): void {
  //   this.products = this.productServ.getproducts(this.selectedCategory);


  // }

  // // Optional: Change category dynamically
  // changeCategory(category: string): void {
  //   this.selectedCategory = category;
  //   this.loadProducts();
  //   this.router.navigate(['/ownCategory'])
  // }
  }
