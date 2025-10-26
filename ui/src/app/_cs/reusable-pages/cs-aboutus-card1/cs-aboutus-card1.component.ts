import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-aboutus-card1',
  imports: [],
  templateUrl: './cs-aboutus-card1.component.html',
  styleUrl: './cs-aboutus-card1.component.scss'
})
export class CsAboutusCard1Component {
  @Input() imageSrc: string = ''; // Image source
  @Input() name: string = ''; // Team member name
  @Input() role: string = ''; // Team member role
  @Input() description: string = ''; // Team member description
}
