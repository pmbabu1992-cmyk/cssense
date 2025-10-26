import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';

@Component({
    selector: 'app-candlestickcharts',
    standalone:true,
    templateUrl: './candlestickcharts.component.html',
    styleUrls: ['./candlestickcharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent] 
})
export class CandlestickchartsComponent {
  public CandlestickChartData: any = chartData.CandlestickChartData;
  public SyncedBrushChartData1: any = chartData.SyncedBrushChartData1;
  public SyncedBrushChartData: any = chartData.SyncedBrushChartData;
  public CandlestickXAxisChartData: any = chartData.CandlestickXAxisChartData;
  public lineChartData: any = chartData.lineChartData;
}
