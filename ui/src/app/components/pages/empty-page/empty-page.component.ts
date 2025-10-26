import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-empty-page',
    standalone:true,
    templateUrl: './empty-page.component.html',
    styleUrls: ['./empty-page.component.scss'],
    imports: [PageHeaderComponent]
})
export class EmptyPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
