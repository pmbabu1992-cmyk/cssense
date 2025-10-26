import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'charts/apexcharts',
    children: [
      {
        path: 'linecharts',
        title: 'CS - Line Chart',
        loadComponent: () => import('./linecharts/linecharts.component').then(m => m.LinechartsComponent),
      },
      {
        path: 'areacharts',
        title: 'CS - Area Chart',
        loadComponent: () => import('./areacharts/areacharts.component').then(m => m.AreachartsComponent),
      },
      {
        path: 'columncharts',
        title: 'CS - Column Chart',
        loadComponent: () => import('./columncharts/columncharts.component').then(m => m.ColumnchartsComponent),
      },
      {
        path: 'barcharts',
        title: 'CS - Bar Chart',
        loadComponent: () => import('./barcharts/barcharts.component').then(m => m.BarchartsComponent)
      },
      {
        path: 'mixedcharts',
        title: 'CS - Mixed Chart',
        loadComponent: () => import('./mixedcharts/mixedcharts.component').then(m => m.MixedchartsComponent),
      },
      {
        path: 'rangeareacharts',
        title: 'CS - Range Area Charts',
        loadComponent: () => import('./rangeareacharts/rangeareacharts.component').then(m => m.RangeareachartsComponent),
      },
      {
        path: 'timelinecharts',
        title: 'CS - Timeline Charts',
        loadComponent: () => import('./timelinecharts/timelinecharts.component').then(m => m.TimelinechartsComponent),
      },
      {
        path: 'candlestickcharts',
        title: 'CS - CandleStick Charts',
        loadComponent: () => import('./candlestickcharts/candlestickcharts.component').then(m => m.CandlestickchartsComponent),
      },
      {
        path: 'boxplotcharts',
        title: 'CS - Boxplot Chart',
        loadComponent: () => import('./boxplotcharts/boxplotcharts.component').then(m => m.BoxplotchartsComponent),
      },
      {
        path: 'bubblecharts',
        title: 'CS - Bubble Chart',
        loadComponent: () => import('./bubblecharts/bubblecharts.component').then(m => m.BubblechartsComponent),
      },
      {
        path: 'scattercharts',
        title: 'Scatter - Scatter Chart',
        loadComponent: () => import('./scattercharts/scattercharts.component').then(m => m.ScatterchartsComponent),
      },
      {
        path: 'heatmapcharts',
        title: 'CS - Heatmap Chart',
        loadComponent: () => import('./heatmapcharts/heatmapcharts.component').then(m => m.HeatmapchartsComponent),
      },
      {
        path: 'treemapcharts',
        title: 'CS - Treemap Chart',
        loadComponent: () => import('./treemapcharts/treemapcharts.component').then(m => m.TreemapchartsComponent),
      },
      {
        path: 'piecharts',
        title: 'CS - Pie Chart',
        loadComponent: () => import('./piecharts/piecharts.component').then(m => m.PiechartsComponent),
      },
      {
        path: 'radialbarcharts',
        title: 'CS - Radialbar Chart',
        loadComponent: () => import('./radialbarcharts/radialbarcharts.component').then(m => m.RadialbarchartsComponent),
      },
      {
        path: 'radarcharts',
        title: 'CS - Radar Chart',
        loadComponent: () => import('./radarcharts/radarcharts.component').then(m => m.RadarchartsComponent),
      },
      {
        path: 'polarareacharts',
        title: 'CS - Polararea Chart',
        loadComponent: () => import('./polarareacharts/polarareacharts.component').then(m => m.PolarareachartsComponent),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApexchartsRoutingModule { 
  static routes=routes
}
