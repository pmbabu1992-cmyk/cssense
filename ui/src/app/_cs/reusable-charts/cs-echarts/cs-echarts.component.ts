import { Component, Input } from '@angular/core';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
@Component({
  selector: 'cs-echarts',
  standalone: true,
  imports: [NgxEchartsModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: echarts }),
    },
  ],
  templateUrl: './cs-echarts.component.html',
  styleUrl: './cs-echarts.component.scss'
})
export class CsEchartsComponent {
  @Input() options: EChartsOption = {};
  @Input() echartId: string = '';         // Dynamic table ID
  @Input() theme: string = ''; 
  @Input() merge: string = '';    



}
