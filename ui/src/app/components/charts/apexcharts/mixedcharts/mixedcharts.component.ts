import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts'; 
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';
@Component({
    selector: 'app-mixedcharts',
    standalone:true,
    templateUrl: './mixedcharts.component.html',
    styleUrls: ['./mixedcharts.component.scss'],
    imports: [PageHeaderComponent, NgApexchartsModule,ApexChartComponent]
})
export class MixedchartsComponent {
  public MixedColumnChartData: any = chartData.MixedColumnChartData;
  public MultipleAxixChartData: any = chartData.MultipleAxixChartData;
  public LineAreaChartData: any = chartData.LineAreaChartData;
  public LineColumnAreaChartData: any = chartData.LineColumnAreaChartData;

  public generateData(count: number, yrange: { max: number; min: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }

  public generateData1(count: number, yrange: { max: number; min: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
}
