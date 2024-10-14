<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
>>>>>>> 8f09947b2837e1f50a9caebfb8545d765a2a26a5

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
<<<<<<< HEAD
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {

=======
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
>>>>>>> 8f09947b2837e1f50a9caebfb8545d765a2a26a5
}
