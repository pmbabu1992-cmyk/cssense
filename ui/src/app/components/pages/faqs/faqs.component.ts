import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-faqs',
    standalone:true,
    templateUrl: './faqs.component.html',
    styleUrls: ['./faqs.component.scss'],
    imports: [PageHeaderComponent]
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
