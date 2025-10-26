import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';

@Component({
    selector: 'app-barcharts',
    standalone:true,
    templateUrl: './barcharts.component.html',
    styleUrls: ['./barcharts.component.scss'],
    imports: [PageHeaderComponent, NgApexchartsModule,ApexChartComponent]
})
export class BarchartsComponent {
  public BarChartData: any = chartData.BarChartData;
  public GroupedBarChartData: any = chartData.GroupedBarChartData;
  public StackedBarChartData: any = chartData.StackedBarChartData;
  public StackedBarData100: any = chartData.StackedBarData100;
  public barChartNegativeValueData: any = chartData.barChartNegativeValueData;
  public BarChartMarkerData: any = chartData.BarChartMarkerData;
  public ReversedBarChartData: any = chartData.ReversedBarChartData;
  public DataLableChartData: any = chartData.DataLableChartData;
  public PatternedBarChartData: any = chartData.PatternedBarChartData;
  public ImageFillData: any = chartData.ImageFillData;
}