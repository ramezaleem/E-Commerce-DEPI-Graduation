import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

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
}
