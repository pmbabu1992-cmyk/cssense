import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule } from '@angular/forms';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../../shared/prismData/color-pickers'
import { MatIconModule } from '@angular/material/icon';
@Component({
    selector: 'app-color-picker',
    standalone:true,
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    imports: [PageHeaderComponent, ShowcodeCardComponent,MatIconModule, ColorPickerModule, NgxColorsModule, FormsModule]
})
export class ColorPickerComponent {
  public color: string = '#2889e9';
  public color1: string = '#2889e9';
  public color2: string = '#e920e9';

  public onEventLog(event: string, data: any): void {
  }
 
  constructor() { }
  color3:string = '#EC407A';
  input1: string = "#00897B";
  prismCode = prismCodeData;

}
