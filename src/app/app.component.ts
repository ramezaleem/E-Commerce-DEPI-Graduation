import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements DoCheck {
  title = 'E-Commerce';
  constructor(private  router:Router){}
  checkpath:boolean=false;
  ngDoCheck(): void {
    console.log(this.router.url.includes('/auth'));

    if(this.router.url.includes('/auth')){
      this.checkpath = false;
    }else{
      this.checkpath = true;
    }
  }
}
