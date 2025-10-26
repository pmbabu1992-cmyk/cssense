import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { RouterLink } from '@angular/router';
import { NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import { CsDropdownsComponent } from 'src/app/_cs/reusable-ui-elements/cs-dropdowns/cs-dropdowns.component';

@Component({
    selector: 'app-read-mail',
    standalone:true,
    templateUrl: './read-mail.component.html',
    styleUrls: ['./read-mail.component.scss'],
    imports: [PageHeaderComponent, RouterLink, NgbTooltip, CsDropdownsComponent]
})
export class ReadMailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
