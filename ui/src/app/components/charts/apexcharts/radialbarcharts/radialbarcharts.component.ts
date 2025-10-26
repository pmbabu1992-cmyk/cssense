import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts'; 
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';

@Component({
    selector: 'app-radialbarcharts',
    standalone:true,
    templateUrl: './radialbarcharts.component.html',
    styleUrls: ['./radialbarcharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class RadialbarchartsComponent {
  public BasicPieChartData: any = chartData.BasicPieChartData;
  public multipleradialBarChart: any = chartData.multipleradialBarChart;
  public CustomAngleChartData: any = chartData.CustomAngleChartData;
  public GradientCircleChartData: any = chartData.GradientCircleChartData;
  public CircleImageChartData: any = chartData.CircleImageChartData;
  public StrokedCircularGaugeData: any = chartData.StrokedCircularGaugeData;
  public SemiCircularGaugeData: any = chartData.SemiCircularGaugeData;
}
