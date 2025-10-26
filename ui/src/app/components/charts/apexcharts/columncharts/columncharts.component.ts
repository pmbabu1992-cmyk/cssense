import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';

@Component({
    selector: 'app-columncharts',
    standalone:true,
    templateUrl: './columncharts.component.html',
    styleUrls: ['./columncharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class ColumnchartsComponent {
  public BasicColumnChartData: any = chartData.BasicColumnChartData;
  public DataLableColumnChartdata: any = chartData.DataLableColumnChartdata;
  public StackedChartData: any = chartData.StackedChartData;
  public stackedData100: any = chartData.stackedData100;
  public ColumnChartdata: any = chartData.ColumnChartdata;
  public RotatedLevelChartData: any = chartData.RotatedLevelChartData;
  public NegativeChartdata: any = chartData.NegativeChartdata;
  public RangeColumnChartData: any = chartData.RangeColumnChartData;
  public DistributedChartData: any = chartData.DistributedChartData;
  public DynamicChartData1: any = chartData.DynamicChartData1;
  public DynamicChartData2: any = chartData.DynamicChartData2;
}
