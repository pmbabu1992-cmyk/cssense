import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';
@Component({
    selector: 'app-piecharts',
    standalone:true,
    templateUrl: './piecharts.component.html',
    styleUrls: ['./piecharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class PiechartsComponent {
  public pieChartData: any = chartData.pieChartData;
  public DonutChartData: any = chartData.DonutChartData;
  public UpdatingDonutChartData: any = chartData.UpdatingDonutChartData;
  public MonochromePieChart: any = chartData.MonochromePieChart;
  public GradientDonutChartData: any = chartData.GradientDonutChartData;
  public DonutPatternChartData: any = chartData.DonutPatternChartData;
  public ImageFillPieChartData: any = chartData.ImageFillPieChartData;
}
