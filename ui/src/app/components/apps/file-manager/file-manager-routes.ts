import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  {
    path:'apps/file-manager',
    children:[
      {path:'file-manager', title:"CS - File Manager", loadComponent: () => import('./file-manager/file-manager.component').then(m => m.FileManagerComponent)},
      {path:'file-manager-details', title:"CS - File Manager Details", loadComponent: () => import('./file-manager-details/file-manager-details.component').then(m => m.FileManagerDetailsComponent)},
      {path:'file-manager-list', title:"CS - File Manager List", loadComponent: () => import('./file-manager-list/file-manager-list.component').then(m => m.FileManagerListComponent)}     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { 
  static routes=routes
}
