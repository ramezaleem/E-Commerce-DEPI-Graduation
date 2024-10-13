import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {
  heroImage:string ='src\app\components\home\Components\home-carousel\images\hero.jpg';
  @ViewChildren ('icon' ) icoon! : QueryList<ElementRef>;
  print(){
    console.log(this.icoon);
    this.icoon.forEach(icon=>{
      icon.nativeElement.style.color= 'red'
    })
  }


}
