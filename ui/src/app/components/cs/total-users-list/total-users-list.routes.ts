import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'totaluserslist', title: 'CS - Total Users List', loadComponent: () => import('./total-users-list.component').then(m => m.TotalUsersListComponent) },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class totalUsersListRoutingModule { 
  static routes=routes
}
