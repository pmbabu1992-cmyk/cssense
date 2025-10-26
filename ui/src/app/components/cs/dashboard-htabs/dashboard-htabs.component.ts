import { Component } from '@angular/core';
import { PageHeaderComponent } from 'src/app/shared/componets/page-header/page-header.component';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet, NgbNavLinkButton, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownModule, NgbNavModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LiveviewComponent } from '../liveview/liveview.component';
@Component({
  selector: 'app-dashboard-htabs',
  standalone: true,
  imports: [PageHeaderComponent,NgbModule, LiveviewComponent],
  templateUrl: './dashboard-htabs.component.html',
  styleUrls: ['./dashboard-htabs.component.scss'],
})
export class DashboardHtabsComponent {
  active=1;
}
