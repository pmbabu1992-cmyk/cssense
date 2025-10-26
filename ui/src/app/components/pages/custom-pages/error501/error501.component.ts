import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-error501',
    standalone:true,
    templateUrl: './error501.component.html',
    styleUrls: ['./error501.component.scss'],
    imports: [RouterLink]
})
export class Error501Component implements OnInit {
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
