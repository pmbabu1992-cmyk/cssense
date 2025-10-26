import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/tabs';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet, NgbNavLinkButton, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownModule, NgbNavModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CsReusableTablesComponent } from 'src/app/_cs/cs-reusable-tables/cs-reusable-tables.component';
@Component({
    selector: 'app-tabs',
    standalone:true,
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    imports: [PageHeaderComponent,NgbModule,CsReusableTablesComponent]
})
export class TabsComponent {
  active2 = 4;
  active3 = 10;
  active4 = 14;
  active5 = 17;
  active6 = 19;
  active7 = 28;
  active8 = 31;
  active9 = 34;
  active12 = 43;
  active13 = 46;
  active14 = 52;
  active15 = 53;
  active16 = 59;
  active17 = 60;
  active18=56;;
  active=2;
  active1=3;
  activeJustified=2;
  activeNav=3;
  products = [
    {
      name: 'Bag Pack',
      category: 'Clothings',
      price: '$1,299.00',
      imageUrl: './assets/images/ecommerce/06.jpg'
    },
    {
      name: 'Headphones',
      category: 'Gadgets',
      price: '$7,249.29',
      imageUrl: './assets/images/ecommerce/04.jpg'
    },
    {
      name: 'Sport Shoes',
      category: 'Footwear',
      price: '$799.00',
      imageUrl: './assets/images/ecommerce/03.jpg'
    }
  ];
  tabsColumn=[
    {header:"Product",field:"Product"},
    {header:"Name",field:"Name"},
    {header:"Category",field:"Category"},
    {header:"Price",field:"Price"},

  ]
}
