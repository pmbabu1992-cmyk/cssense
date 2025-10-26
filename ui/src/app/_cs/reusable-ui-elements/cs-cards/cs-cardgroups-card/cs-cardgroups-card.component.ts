import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-cardgroups-card',
  standalone: true,
  imports: [],
  templateUrl: './cs-cardgroups-card.component.html',
  styleUrl: './cs-cardgroups-card.component.scss'
})
export class CsCardgroupsCardComponent {
  @Input() image:string = '';  
  @Input() title:string = ''; 
  @Input() discription:string = ''; 
  @Input() status:string = '';  
}
