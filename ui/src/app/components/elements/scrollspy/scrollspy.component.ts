import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgbScrollSpyMenu, NgbScrollSpyItem, NgbScrollSpy, NgbScrollSpyFragment } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import { CsDropdownsComponent } from 'src/app/_cs/reusable-ui-elements/cs-dropdowns/cs-dropdowns.component';
import * as prismCodeData from '../../../shared/prismData/scrollspy'
@Component({
    selector: 'app-scrollspy',
    standalone:true,
    templateUrl: './scrollspy.component.html',
    styleUrls: ['./scrollspy.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent,CsDropdownsComponent, NgbScrollSpyMenu, NgbScrollSpyItem, NgbScrollSpy, NgbScrollSpyFragment]
})
export class ScrollspyComponent {
  prismCode = prismCodeData;

}
