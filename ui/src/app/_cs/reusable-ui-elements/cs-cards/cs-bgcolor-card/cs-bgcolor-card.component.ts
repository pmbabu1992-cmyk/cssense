import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-bgcolor-card',
  standalone: true,
  imports: [],
  templateUrl: './cs-bgcolor-card.component.html',
  styleUrl: './cs-bgcolor-card.component.scss'
})
export class CsBgcolorCardComponent {
  @Input() image:string = '';  
  @Input() status:string = ''; 
  @Input() BgColor:string = ''; 
  @Input() name:string = ''; 
  @Input() textColor:string = ''; 
  @Input() icon:boolean = false; 

}
