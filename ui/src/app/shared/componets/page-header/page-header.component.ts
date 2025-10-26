import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-page-header',
    standalone:true,
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
    imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, CommonModule]
})
export class PageHeaderComponent {
  @Input() title!: string;
  @Input() items!: any[];
  @Input() active_item!: string;
  @Input() breadcrumbRight!: boolean;
}
