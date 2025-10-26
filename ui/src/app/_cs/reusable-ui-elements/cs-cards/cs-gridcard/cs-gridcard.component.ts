import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-gridcard',
  standalone: true,
  imports: [],
  templateUrl: './cs-gridcard.component.html',
  styleUrl: './cs-gridcard.component.scss'
})
export class CsGridcardComponent {
  @Input() image:string = '';  
  @Input() title:string = ''; 
  @Input() discription:string = ''; 
  @Input() discription1:string = ''; 
  @Input() status:string = ''; 
  @Input() button:boolean = false; 
  @Input() text1:boolean = false; 
}
