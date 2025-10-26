import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-widgets',
    standalone:true,
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
   imports: [NgbNavModule]
})
export class WidgetsComponent implements OnInit {
  active = 1;
  constructor() {}

  ngOnInit(): void {}

  hideNavigationArrows = false;
  hideNavigationIndicators = false;
}
