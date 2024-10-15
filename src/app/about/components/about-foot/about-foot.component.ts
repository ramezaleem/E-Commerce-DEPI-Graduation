import { Component } from '@angular/core';
import { AboutServiceService } from '../../../services/about-service.service';

@Component({
  selector: 'app-about-foot',
  templateUrl: './about-foot.component.html',
  styleUrl: './about-foot.component.scss'
})
export class AboutFootComponent {
constructor( private footServ:AboutServiceService){}
superServices = this.footServ.aboutFootServ;
}
