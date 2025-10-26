import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-listgroup-card',
  standalone: true,
  imports: [],
  templateUrl: './cs-listgroup-card.component.html',
  styleUrl: './cs-listgroup-card.component.scss'
})
export class CsListgroupCardComponent {
  @Input() header: string = ''; 
  @Input() items: string[] = [];
  @Input() footer: string = ''; 
}
