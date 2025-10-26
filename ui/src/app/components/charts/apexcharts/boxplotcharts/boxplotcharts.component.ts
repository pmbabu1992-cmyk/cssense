import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';
@Component({
    selector: 'app-boxplotcharts',
    standalone:true,
    templateUrl: './boxplotcharts.component.html',
    styleUrls: ['./boxplotcharts.component.scss'],
    imports: [PageHeaderComponent,ApexChartComponent]
})
export class BoxplotchartsComponent {
  public BoxPlotChartData: any = chartData.BoxPlotChartData;
  public ScatterChartData: any = chartData.ScatterChartData;
  public HorizontalBoxplotChartData: any = chartData.HorizontalBoxplotChartData;
}
