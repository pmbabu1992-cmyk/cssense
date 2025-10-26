import { Component } from '@angular/core';
 import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';
@Component({
    selector: 'app-timelinecharts',
    standalone:true,
    templateUrl: './timelinecharts.component.html',
    styleUrls: ['./timelinecharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class TimelinechartsComponent {
  public BasicTimeLineChartData: any = chartData.BasicTimeLineChartData;
  public multipleColoredTImelineChartData: any =
    chartData.multipleColoredTImelineChartData;
  public multipleSeriesTImelineChartData: any =
    chartData.multipleSeriesTImelineChartData;
  public AdvancedChartDAta: any = chartData.AdvancedChartDAta;
  public GroupRowChartData: any = chartData.GroupRowChartData;
}
