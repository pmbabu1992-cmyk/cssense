import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-border-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-border-card.component.html',
  styleUrl: './cs-border-card.component.scss'
})
export class CsBorderCardComponent {
  @Input() image:string = '';  
  @Input() title:string = ''; 
  @Input() borderClass:string = ''; 
  @Input() iconClass:string = ''; 
  @Input() status:string = ''; 
  @Input() badges: string[] = [];
  @Input() badgeClasses: string[] = [];
  @Input() avatars: string[] = [];
}
