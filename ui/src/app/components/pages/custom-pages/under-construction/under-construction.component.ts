import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-under-construction',
    standalone:true,
    templateUrl: './under-construction.component.html',
    styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {
  public days: any;
  public hours: any;
  public minutes: any;
  public seconds: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    //Date Count-Down
    const countDown = new Date('Dec 1, 2025 00:00:00').getTime();
    const time = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(time);
      }
    }, 1000);

    if (localStorage.getItem('valexHeader') == 'light') {
      document.querySelector('html')?.setAttribute('data-theme-mode', 'light');
    } else if (localStorage.getItem('valexHeader') == 'dark') {
      document.querySelector('html')?.setAttribute('data-theme-mode', 'dark');
    }
  }

  ngOnDestroy(): void {
    if (localStorage.getItem('valexHeader') == 'light') {
      document.querySelector('html')?.setAttribute('data-theme-mode', 'light');
    } else if (localStorage.getItem('valexHeader') == 'dark') {
      document.querySelector('html')?.setAttribute('data-theme-mode', 'dark');
    }
  }

  item = sessionStorage.getItem('TransparentTheme') !== null;
}
