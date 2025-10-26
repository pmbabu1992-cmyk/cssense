import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'liveview', title: 'CS - Liveview', loadComponent: () => import('./liveview.component').then(m => m.LiveviewComponent) },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveviewRoutingModule { 
  static routes=routes
}
