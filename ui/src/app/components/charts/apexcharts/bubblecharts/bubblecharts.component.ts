import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';

@Component({
    selector: 'app-bubblecharts',
    standalone:true,
    templateUrl: './bubblecharts.component.html',
    styleUrls: ['./bubblecharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class BubblechartsComponent {
  public BubbleChartData: any = chartData.BubbleChartData;
  public ThreeDChartData: any = chartData.ThreeDChartData;
}
