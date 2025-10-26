import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts'; 
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';

@Component({
    selector: 'app-rangeareacharts',
    standalone:true,
    templateUrl: './rangeareacharts.component.html',
    styleUrls: ['./rangeareacharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class RangeareachartsComponent {
  public RangeAreaChartData: any = chartData.RangeAreaChartData;
  public ComboRangeAreaChartData: any = chartData.ComboRangeAreaChartData;
}
