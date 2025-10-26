import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'icon', title: 'CS -Icons', loadComponent: () => import('./icons/icons.component').then(m => m.IconsComponent) },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconRoutingModule { 
  static routes=routes
}
