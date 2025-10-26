import { Component } from '@angular/core';
 import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';
@Component({
    selector: 'app-heatmapcharts',
    standalone:true,
    templateUrl: './heatmapcharts.component.html',
    styleUrls: ['./heatmapcharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class HeatmapchartsComponent {
  public HeatmapChartData: any = chartData.HeatmapChartData;
  public MultiSeriesChartData: any = chartData.MultiSeriesChartData;
  public ColorRangeHeatmapChartData: any = chartData.ColorRangeHeatmapChartData;
  public HeatmapShadesChartData: any = chartData.HeatmapShadesChartData;
}
