import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-flex',
    standalone:true,
    templateUrl: './flex.component.html',
    styleUrls: ['./flex.component.scss'],
    imports: [PageHeaderComponent]
})
export class FlexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
