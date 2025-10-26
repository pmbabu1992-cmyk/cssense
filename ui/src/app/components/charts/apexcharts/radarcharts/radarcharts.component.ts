import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts'; 
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';
@Component({
    selector: 'app-radarcharts',
    standalone:true,
    templateUrl: './radarcharts.component.html',
    styleUrls: ['./radarcharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class RadarchartsComponent {
  public RadarChartdata: any = chartData.RadarChartdata;
  public ChartMultipleSeriesChartData: any =
    chartData.ChartMultipleSeriesChartData;
  public PoygonFillChartData: any = chartData.PoygonFillChartData;
}
