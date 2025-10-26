import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApexChartComponent } from "../../reusable-charts/apex-chart/apex-chart.component";

@Component({
  selector: 'cs-dashboard-card',
  imports: [CommonModule, ApexChartComponent, ApexChartComponent],
  templateUrl: './cs-dashboard-card.component.html',
  styleUrl: './cs-dashboard-card.component.scss'
})
export class CsDashboardCardComponent {
  @Input() label: string = '';
  @Input() amount: string = '';
  @Input() comparisonText: string = 'Compared to last week';
  @Input() change: string = '';
  @Input() icon: string = '';
  @Input() bgClass: string = '';
  @Input() isPositive: boolean = true;
  @Input() chartId: string = '';
  @Input() chartOptions: any = null;
}
