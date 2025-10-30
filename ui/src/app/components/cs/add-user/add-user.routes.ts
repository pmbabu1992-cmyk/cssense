import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'adduser', title: 'CS - Add User', loadComponent: () => import('./add-user.component').then(m => m.AddUserComponent) },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addUserRoutingModule { 
  static routes=routes
}
