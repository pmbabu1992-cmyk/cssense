import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';
@Component({
    selector: 'app-polarareacharts',
    standalone:true,
    templateUrl: './polarareacharts.component.html',
    styleUrls: ['./polarareacharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class PolarareachartsComponent {
  public PolarAreaChartData: any = chartData.PolarAreaChartData;
  public PolarAreaMonochromeChart: any = chartData.PolarAreaMonochromeChart;
}
