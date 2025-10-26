import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { BarRatingComponent } from 'src/app/_cs/cs-reusable-plugins/bar-rating/bar-rating.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-ratings',
    standalone:true,
    templateUrl: './ratings.component.html',
    styleUrls: ['./ratings.component.scss'],
    imports: [PageHeaderComponent,BarRatingComponent,NgbModule]
})
export class RatingsComponent implements OnInit {
  squareRate = 3;
  faRate = 3;
  currentRate = 5;
  customCurrentRate = 5;
  customCurrentRateInput = 5;
  selected = 0;
  selected1 = 0;
  hovered = 0;
  hovered1 = 0;
  readonly = false;
  heartRate = 3.45;
  ctrl: UntypedFormControl;
  ctrl1: UntypedFormControl;
  constructor() {
    this.ctrl = new UntypedFormControl(null, Validators.required);
    this.ctrl1 = new UntypedFormControl(null, Validators.required);
  }

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }

  ngOnInit(): void {}

  toggle = () => {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  };
}
