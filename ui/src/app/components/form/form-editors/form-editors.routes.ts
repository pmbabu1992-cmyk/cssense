import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'form',
    children: [
      {
        path: 'quill-editor',
        title: 'CS - Quill Editors',
        loadComponent: () => import('./quill-editor/quill-editor.component').then(m => m.QuillEditorComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule],
})
export class FormEditorsRoutingModule {
  static routes=routes
}
