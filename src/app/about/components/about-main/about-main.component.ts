import { Component } from '@angular/core';
import { AboutServiceService } from '../../../services/about-service.service';

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrl: './about-main.component.scss'
})
export class AboutMainComponent {
  constructor(private  mainServ: AboutServiceService){}
 services = this.mainServ.aboutMainServ;


}
