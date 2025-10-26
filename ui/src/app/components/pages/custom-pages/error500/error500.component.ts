import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-error500',
    standalone:true,
    templateUrl: './error500.component.html',
    styleUrls: ['./error500.component.scss'],
    imports: [RouterLink]
})
export class Error500Component implements OnInit {
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
