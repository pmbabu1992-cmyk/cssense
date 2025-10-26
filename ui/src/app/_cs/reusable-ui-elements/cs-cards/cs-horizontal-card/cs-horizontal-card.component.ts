import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-horizontal-card',
  standalone: true,
  imports: [],
  templateUrl: './cs-horizontal-card.component.html',
  styleUrl: './cs-horizontal-card.component.scss'
})
export class CsHorizontalCardComponent {
  @Input() image:string = '';  
  @Input() title:string = ''; 
  @Input() headerTitle:string = ''; 
  @Input() discription:string = ''; 
  @Input() status:string = ''; 
  @Input() imagePlacementStart: boolean = false;
  @Input() imagePlacementEnd: boolean = false;
}
