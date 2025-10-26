import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-timeline',
    standalone:true,
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    imports: [PageHeaderComponent]
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
