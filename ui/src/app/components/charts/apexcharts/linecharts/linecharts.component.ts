import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';

@Component({
    selector: 'app-linecharts',
    standalone:true,
    templateUrl: './linecharts.component.html',
    styleUrls: ['./linecharts.component.scss'],
    imports: [PageHeaderComponent, NgApexchartsModule,ApexChartComponent]
})
export class LinechartsComponent {
  public BasicLineData: any = chartData.BasicLineChartData;
  public DataLableLinechartData: any = chartData.DataLableLineChartData;
  public LineAnnotationData: any = chartData.LineAnnotationsData;
  public BrushChartsData1: any = chartData.BrushChartData1;
  public BrushChartsData2: any = chartData.BrushChartData2;
  public StepLineChartData: any = chartData.StepLineData;
  public GradientLineCahrtData: any = chartData.GradientLineData;
  public MissingNullChartData: any = chartData.MissingNullChartData;
  public DasheLineChartData: any = chartData.DasheLineChartData;
  public SyncingChartData1: any = chartData.SyncingChartData1;
  public SyncingChartData2: any = chartData.SyncingChartData2;
  public SyncingChartData3: any = chartData.SyncingChartData3;
  public ReatTimeChartData: any = chartData.ReatTimeChartData;
  public ZoomableChartData: any = chartData.ZoomableChartData;

  public generateDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { max: number; min: number }
  ) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  constructor() {}
}
