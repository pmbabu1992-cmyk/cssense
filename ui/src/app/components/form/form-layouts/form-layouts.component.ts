import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import { CsNgSelectComponent } from 'src/app/_cs/cs-ng-select/cs-ng-select.component';
import * as prismCodeData from '../../../shared/prismData/forms/form_layouts'

@Component({
    selector: 'app-form-layouts',
    standalone:true,
    templateUrl: './form-layouts.component.html',
    styleUrls: ['./form-layouts.component.scss'],
    imports: [PageHeaderComponent, CsNgSelectComponent,ShowcodeCardComponent]
})
export class FormLayoutsComponent  {

  prismCode = prismCodeData;
  Preference=[
    {label:'Choose...',value:1},
    {label:'One',value:2},
    {label:'Two',value:3},
    {label:'Three',value:4},
  ]

 
}
