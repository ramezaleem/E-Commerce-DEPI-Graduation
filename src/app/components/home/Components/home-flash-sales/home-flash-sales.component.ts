import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-home-flash-sales',
  templateUrl: './home-flash-sales.component.html',
  styleUrls: ['./home-flash-sales.component.scss'],
})
export class HomeFlashSalesComponent implements OnInit, OnDestroy {
  timerVisible: boolean = true;
  countdown: any;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  @Output() navigateCarousel: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 14);

    this.countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.countdown);
        this.timerVisible = false;
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.countdown);
  }

  // Emit navigation events
  onNavigate(direction: string) {
    this.navigateCarousel.emit(direction);
  }
}
