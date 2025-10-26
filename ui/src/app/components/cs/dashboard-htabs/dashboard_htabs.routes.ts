import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboardhtabs', title: 'CS - Dashboard Tabs', loadComponent: () => import('./dashboard-htabs.component').then(m => m.DashboardHtabsComponent) },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dashboardHtabsRoutingModule { 
  static routes=routes
}
