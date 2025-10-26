import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex_chart';
import { ApexAxisChartSeries, ApexDataLabels, ApexFill, ApexYAxis, ApexXAxis, ApexStroke, ApexLegend, ApexChart, NgApexchartsModule } from 'ng-apexcharts';
import { githubData } from '../../../../shared/data/charts/apex_chart';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { series } from './data';
import { ApexChartComponent } from 'src/app/_cs/reusable-charts/apex-chart/apex-chart.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  legend: ApexLegend;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  colors: any;
};

@Component({
    selector: 'app-areacharts',
    standalone:true,
    templateUrl: './areacharts.component.html',
    styleUrls: ['./areacharts.component.scss'],
    imports: [PageHeaderComponent, NgApexchartsModule,ApexChartComponent]
})

export class AreachartsComponent {
  public BasicAreaChartData: any = chartData.AreaChartData;
  public SplineAreaChartData: any = chartData.SplineAreaChartData;
  public NegativeValuesChartData: any = chartData.NegativeValuesChartData;
  public githubMonthsChartData: any = chartData.githubMonthsChartData;
  public githubYearsChartData: any = chartData.githubYearsChartData;
  public StackedAreachartData: any = chartData.StackedAreachartData;
  public IrregularTimeChartData: any = chartData.IrregularTimeChartData;
  public AreaChartNullValueData: any = chartData.AreaChartNullValueData;
  public AreaxAxisChartData: any = chartData.AreaxAxisChartData;

  public chartMonths!: Partial<ChartOptions>|any;
  public chartYears!: Partial<ChartOptions>|any;
  public commonOptions: Partial<ChartOptions>|any = {
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
      type: "solid"
    },
    xaxis: {
      type: "datetime"
    },
    stroke: {
      width: 0,
      curve: "smooth"
    }
  };

  constructor(){
    this.initCharts();
    
  }

  chartOptions1: any = {
    series: [
      {
        name: 'STOCK ABC',
        data: series.monthDataSeries1.prices,
      },
    ],
    colors:['rgb(121, 97, 245)'],
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
      events: {
        mounted: (chart:any) => {
          chart.windowResizeHandler();
        }
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },

    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left',
      style: {
        fontSize: '13px',
        fontWeight: 'bold',
        color: '#8c9097'
    },
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left',
      
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
  };

  public initCharts(): void {
    this.chartMonths = {
      series: [
        {
          name: "commits",
          data: githubData.series
        }
      ],
      chart: {
        id: "chartyear",
        type: "area",
        height: 160,
        background: "#F6F8FA",
        toolbar: {
          show: false,
          autoSelected: "pan"
        },
        zoom: {
          enabled: false,
        },
        events: {
          mounted: function(chart: any) {
           },
          updated: function(chart: any) {
          }
        }
      },
      colors: ["#0162e8"],

      yaxis: {
        show: false,
        tickAmount: 3
      }
    };

    this.chartYears = {
      series: [
        {
          name: "commits",
          data: githubData.series
        }
      ],
      chart: {
        height: 140,
        type: "area",
        background: "#F6F8FA",
        toolbar: {
          autoSelected: "selection"
        },
        brush: {
          enabled: true,
          target: "chartyear"
        },
        zoom: {
          enabled: false,
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("26 Jan 2014").getTime(),
            max: new Date("29 Mar 2015").getTime()
          }
        }
      },
      colors: ["#00b9ff"],
      legend: {
        position: "top",
        horizontalAlign: "left"
      }
    };

}

  
}
