import { Component,ElementRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-reset-password',
    standalone:true,
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    imports: [RouterLink]
})
export class ResetPasswordComponent implements OnInit {
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
