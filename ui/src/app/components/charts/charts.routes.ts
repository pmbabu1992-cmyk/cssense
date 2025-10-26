import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'charts',
    children: [
      {
        path: 'chartjs',
        title: 'CS - Chartjs',
        loadComponent: () => import('./chartjs/chartjs.component').then(m => m.ChartjsComponent),
      },
      {
        path: 'echarts',
        title: 'CS - Echarts',
        loadComponent: () => import('./echarts/echarts.component').then(m => m.EchartsComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartRoutingModule {
  static routes=routes
}  