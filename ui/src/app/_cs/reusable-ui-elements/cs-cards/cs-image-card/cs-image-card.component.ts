import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-image-card',
  standalone: true,
  imports: [],
  templateUrl: './cs-image-card.component.html',
  styleUrl: './cs-image-card.component.scss'
})
export class CsImageCardComponent {
  @Input() image:string = '';  
  @Input() title:string = ''; 
  @Input() discription:string = ''; 
  @Input() status:string = ''; 
  @Input() TopImagePlacement: boolean = false;
  @Input() bottomImagePlacement: boolean = false;
  @Input() customStatusPlacement: boolean = false;
  @Input() BottomStatusPlacement: boolean = false;
}
