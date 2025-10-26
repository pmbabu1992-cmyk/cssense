import { Component } from '@angular/core';
 import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';
@Component({
    selector: 'app-scattercharts',
    standalone:true,
    templateUrl: './scattercharts.component.html',
    styleUrls: ['./scattercharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class ScatterchartsComponent {
  public BasicScatterChartData: any = chartData.BasicScatterChartData;
  public DateTimeScatterChartData: any = chartData.DateTimeScatterChartData;
  public ImageFillChartData: any = chartData.ImageFillChartData;
}
