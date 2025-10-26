import { Component, OnInit } from '@angular/core';
import * as PrismCode from '../../../shared/prismData/breadcrumb';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import { CsBreadcrumbComponent } from 'src/app/_cs/reusable-ui-elements/cs-breadcrumb/cs-breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-breadcrumbs',
    standalone:true,
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent,CsBreadcrumbComponent,CommonModule]
})
export class BreadcrumbsComponent {
  prsimCodeData: any = PrismCode;
  breadcrumbStyle = {
    '--bs-breadcrumb-divider':
      'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'currentColor\'/%3E%3C/svg%3E")',
  };
  divider = {
    '--bs-breadcrumb-divider': "'~'"
}
divider1 = {
  '--bs-breadcrumb-divider': "''"
}
}
