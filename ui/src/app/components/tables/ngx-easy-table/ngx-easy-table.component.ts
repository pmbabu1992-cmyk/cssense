import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxReusableTableComponent } from 'src/app/_cs/ngx-reusable-table/ngx-reusable-table.component';
import { PageHeaderComponent } from 'src/app/shared/componets/page-header/page-header.component';

@Component({
  selector: 'app-ngx-easy-table',
  imports: [PageHeaderComponent,NgxReusableTableComponent],
  templateUrl: './ngx-easy-table.component.html',
  styleUrl: './ngx-easy-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxEasyTableComponent {

}
