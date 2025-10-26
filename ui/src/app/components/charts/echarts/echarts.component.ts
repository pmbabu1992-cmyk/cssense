import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/charts/echart';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CsEchartsComponent } from 'src/app/_cs/reusable-charts/cs-echarts/cs-echarts.component';

@Component({
    selector: 'app-echarts',
    templateUrl: './echarts.component.html',
    styleUrls: ['./echarts.component.scss'],
    imports: [PageHeaderComponent, CsEchartsComponent, NgxEchartsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EchartsComponent implements OnInit {
  //
  public echartHorizontalLineBarChart = chartData.echartHorizontalLineBarChart;
  public smoothlinechart = chartData.smoothlinechart;
  public basicAreaChart = chartData.basicAreaChart;
  public stackedlineChart = chartData.stackedlineChart;
  public stackedAreaChart = chartData.stackedAreaChart;
  public steplineChart = chartData.steplineChart;
  public basicBarChart = chartData.basicBarChart;
  public barBgChart = chartData.barBgChart;
  public singleBarChart = chartData.singleBarChart;
  public waterFallChart = chartData.waterFallChart;
  public barChartNegativeChart = chartData.barChartNegativeChart;
  public barLableChart = chartData.barLableChart;
  public horizontalBarChart = chartData.horizontalBarChart;
  public horizontalStackedBarChart = chartData.horizontalStackedBarChart;
  public pieChart = chartData.pieChart;
  public doughutChart = chartData.doughutChart;
  public scatterChart = chartData.scatterChart;
  public bubbledChart = chartData.bubbledChart;
  public radarChart = chartData.radarChart;
  public candlestickChart = chartData.candlestickChart;
  public treemapChart = chartData.treemapChart;
  public funnelChart = chartData.funnelChart;
  public guageChart = chartData.guageChart;
  public graphChart = chartData.graphChart;
  public BarChart = chartData.BarChart;

  options!: EChartsOption;

  ngOnInit(): void {
    this.options = {
      title: {
        top: 30,
        left: 'center',
        text: 'Daily Step Count',
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: this.getVirtualData('2016'),
      },
    };
  }

  getVirtualData(year: string) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data: [string, number][] = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 10000),
      ]);
    }
    return data;
  }
}
