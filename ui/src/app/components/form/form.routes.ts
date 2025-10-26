import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'form',
    children: [
      {
        path: 'floating-labels',
        title: 'CS - Floating Labels',
        loadComponent: () => import('./floating-labels/floating-labels.component').then(m => m.FloatingLabelsComponent),
      },
      {
        path: 'form-layouts',
        title: 'CS - Form Layouts',
        loadComponent: () => import('./form-layouts/form-layouts.component').then(m => m.FormLayoutsComponent),
      },
      {
        path: 'form-validation',
        title: 'CS - Form Validation',
        loadComponent: () => import('./form-validation/form-validation.component').then(m => m.FormValidationComponent),
      },
      {
        path: 'select2',
        title: 'CS - Select2',
        loadComponent: () => import('./select2/select2.component').then(m => m.Select2Component),
      },
    ],
  },
];

@NgModule ({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})

export class FormRoutingModule {
  static routes=routes


}