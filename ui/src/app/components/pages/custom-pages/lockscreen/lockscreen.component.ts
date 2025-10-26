import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-lockscreen',
    standalone:true,
    templateUrl: './lockscreen.component.html',
    styleUrls: ['./lockscreen.component.scss'],
    imports: [RouterLink]
})
export class LockscreenComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
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
}
