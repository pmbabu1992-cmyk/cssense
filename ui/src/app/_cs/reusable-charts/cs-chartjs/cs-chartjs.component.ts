import { Component, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'cs-chartjs',
  standalone:true,
  imports: [BaseChartDirective],
  templateUrl: './cs-chartjs.component.html',
  styleUrl: './cs-chartjs.component.scss'
})
export class CsChartjsComponent {
  @Input('data') ChartData:any;
  @Input('options') ChartOptions:any;
  @Input('type') ChartType:any;


}
