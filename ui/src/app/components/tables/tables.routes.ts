import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";





const routes: Routes = [
  {
    path: 'tables',
    children: [
      {
        path: 'basictables',
        title: 'CS - Basictables',
        loadComponent: () => import('./basic-tables/basic-tables.component').then(m => m.BasicTablesComponent),
      },
      {
        path: 'ngx-easy-table',
        title: 'CS - Ngx Easy Table',
        loadComponent: () => import('./ngx-easy-table/ngx-easy-table.component').then(m => m.NgxEasyTableComponent),
      },
      {
        path: 'angular-material-tables',
        title: 'CS - Angular Material Tables',
        loadComponent: () => import('./angular-material-table/angular-material-table.component').then(m => m.AngularMaterialTableComponent),
      },
    ],
  },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TablesRoutingModule {
  static routes=routes

 }