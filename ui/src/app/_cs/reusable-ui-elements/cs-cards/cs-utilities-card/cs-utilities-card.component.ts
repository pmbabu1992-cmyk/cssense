import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-utilities-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cs-utilities-card.component.html',
  styleUrl: './cs-utilities-card.component.scss'
})
export class CsUtilitiesCardComponent {
  @Input() widthClass:string = '';  
  @Input() title:string = '';  
  @Input() discription:string = ''; 
}
