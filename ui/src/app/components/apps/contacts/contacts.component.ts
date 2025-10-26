import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-contacts',
    standalone:true,
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    imports: [PageHeaderComponent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet, NgbTooltip]
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  active = 1;

  ngAfterViewInit() {
    const contact: any = document.querySelector('#mainContactList');
   
  }

  url1: string = ''; // Assuming url1 is a property in your component

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) { 
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url1 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
