import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';
 
@Component({
    selector: 'app-treemapcharts',
    standalone:true,
    templateUrl: './treemapcharts.component.html',
    styleUrls: ['./treemapcharts.component.scss'],
    imports: [PageHeaderComponent, ApexChartComponent]
})
export class TreemapchartsComponent {
  public TreemapCahrtData: any = chartData.TreemapCahrtData;
  public DimensionalTreemapdata: any = chartData.DimensionalTreemapdata;
  public DistributedTreemapData: any = chartData.DistributedTreemapData;
  public ColorrangeDate: any = chartData.ColorrangeDate;
}
