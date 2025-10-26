import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCalendar, NgbDateStruct, NgbTimeStruct, NgbTimepickerConfig, NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { createMask, InputMaskModule } from '@ngneat/input-mask';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import Cleave from 'cleave.js';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
@Component({
    selector: 'app-input-masks',
    standalone:true,
    templateUrl: './input-masks.component.html',
    styleUrls: ['./input-masks.component.scss'],
    imports: [PageHeaderComponent, InputMaskModule,NgxCleaveDirectiveModule, FormsModule, ReactiveFormsModule, NgbTimepicker]
})
export class InputMasksComponent {
  model1!: NgbDateStruct;
  model!: NgbDateStruct;
  today = this.calendar.getToday();
  selectedDate: any;
  datePickerConfig: any;
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  seconds = true;
  time1 = { hour: 13, minute: 30 };
  spinners = true;
  time2: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };

  dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd-mm-yyyy',
    parser: (value: string) => {
      const values = value.split('/');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(year, month, date);
    }
  });
  // dATEFORMATE
  dateInputMask1 = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'mm-dd-yyyy',
    parser: (value: string) => {
      const values = value.split('/');
      const year = +values[2];
      const month = +values[1] - 1;
      const date = +values[0];
      return new Date(month,date,year);
    }
  });
  
  //   // monthYear
dateInputMask2 = createMask<Date>({
  alias: 'datetime',
  inputFormat: 'mm-yy',
  parser: (value: string) => {
    const values = value.split('/');
    const year = +values[2];
    const month = +values[1] - 1;
    const date = +values[0];
    return new Date(month,year);
  }
});

  constructor(private calendar: NgbCalendar, config: NgbTimepickerConfig) {}

  ngOnInit(): void {
    this.datePickerConfig = {
      firstDayOfWeek: 'su',
      monthFormat: 'mmm, yyyy',
      disableKeypress: false,
      allowMultiSelect: false,
      closeOnSelect: undefined,
      closeOnSelectDelay: 100,
      onOpenDelay: 0,
      weekDayFormat: 'ddd',
      appendTo: document.body,
      drops: 'down',
      opens: 'right',
      showNearMonthDays: true,
      showWeekNumbers: false,
      enableMonthSelector: true,
      format: 'mm-dd-yyyy',
      yearFormat: 'yyyy',
      showGoToCurrent: true,
      dayBtnFormat: 'dd',
      monthBtnFormat: 'mmm',
      hours12Format: 'hh',
      hours24Format: 'HH',
      meridiemFormat: 'A',
      minutesFormat: 'mm',
      minutesInterval: 1,
      secondsFormat: 'ss',
      secondsInterval: 1,
      showSeconds: false,
      showTwentyFourHours: true,
      timeSeparator: ':',
      multipleYearsNavigateBy: 10,
      showMultipleYearsNavigation: false,
    };
  }

  licenseInputMask = createMask('[9-]AAA-999-AAAA');
  licenseFC = new FormControl('');

  ipAddressMask = createMask({ alias: 'ip' });
  ipFC = new FormControl('');

  phoneMask = createMask({ alias: 'US(+1)99 9999 9999' });
  phoneFC = new FormControl('');

  currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    digits: 2,
    digitsOptional: false,
    prefix: '$ ',
    placeholder: '0',
  });
  currencyFC = new FormControl('');

  dateFC = new FormControl('');
  ngAfterViewInit(): void {
    
    /* number formatting */
    var n1 = new Cleave('.number-format', {
      numeral: true,
      numeralThousandsGroupStyle: 'lakh',
    });
  }
  
}
