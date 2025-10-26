import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-search',
    standalone:true,
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    imports: [PageHeaderComponent, NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
