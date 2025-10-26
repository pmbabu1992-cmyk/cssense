import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: 'CS - Landing Page',
        loadComponent: () => import('./landing-page/landing-page.component').then(m => m.LandingPageComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { 
  static routes=routes

}
