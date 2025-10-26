import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-navigation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-navigation-card.component.html',
  styleUrl: './cs-navigation-card.component.scss'
})
export class CsNavigationCardComponent {
  @Input() tabType:string = '';  
  @Input() title:string = ''; 
  @Input() active:string = ''; 
  @Input() disabled:string = ''; 
  @Input() text:string = ''; 
  @Input() buttonText:string = ''; 
  @Input() label:string = ''; 
  @Input() link:string = ''; 
  @Input() tabs: { label: string; link: string; active: boolean; disabled: boolean }[] = [];

}
