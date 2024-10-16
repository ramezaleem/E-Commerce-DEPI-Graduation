import { Component } from '@angular/core';
import { AboutServiceService } from '../../../services/about-service.service';

@Component({
  selector: 'app-about-mid',
  templateUrl: './about-mid.component.html',
  styleUrl: './about-mid.component.scss'
})
export class AboutMidComponent {
  constructor(private midServ:AboutServiceService){}
  employees = this.midServ.aboutMidServ;
}
