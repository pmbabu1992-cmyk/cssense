import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';

@Component({
    selector: 'app-position',
    standalone:true,
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.scss'],
    imports: [PageHeaderComponent]
})
export class PositionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
