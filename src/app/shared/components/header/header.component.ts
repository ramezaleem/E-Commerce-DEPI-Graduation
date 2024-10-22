import { AfterContentChecked, Component, DoCheck, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements DoCheck,AfterContentChecked {
  constructor(private router: Router) {}
  showBadge :boolean =false;
  ngDoCheck(): void {
    this.getproducts();
  }
  ngAfterContentChecked(): void {
    this.checkISCartEmpty();
  }

  isSticky: boolean = false;

  @HostListener('window : scroll', [])
  onWindowScroll() {
    const scroll = window.scrollY || window.pageYOffset;
    this.isSticky = scroll > 615;
  }
  logout() {
    localStorage.removeItem('isloggedin');
    this.router.navigate(['/auth/SignUp']);
  }
  productAmount:any[]=[];
  getproducts(){
    if('cart' in localStorage){
      this.productAmount = JSON.parse(localStorage.getItem("cart")!)
    }
  }
  checkISCartEmpty(){
    if(this.productAmount.length){
      this.showBadge =true;
    }
    return this.showBadge;
  }
}
