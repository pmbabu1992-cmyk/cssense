import { Component, Input } from '@angular/core';
import { CsDropdownsComponent } from '../../reusable-ui-elements/cs-dropdowns/cs-dropdowns.component';

@Component({
  selector: 'cs-profile-friends',
  imports: [CsDropdownsComponent],
  templateUrl: './cs-profile-friends.component.html',
  styleUrl: './cs-profile-friends.component.scss'
})
export class CsProfileFriendsComponent {
  @Input() imageSrc: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
}
