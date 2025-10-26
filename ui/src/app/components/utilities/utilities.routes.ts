import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';










const routes: Routes = [
  {
    path: 'utilities',
    children: [
      {
        path: 'border',
        title: 'CS - Borders',
        loadComponent: () => import('./border/border.component').then(m => m.BorderComponent),
      },
      {
        path: 'flex',
        title: 'CS - Flex',
        loadComponent: () => import('./flex/flex.component').then(m => m.FlexComponent),
      },
      {
        path: 'breakponts',
        title: 'CS - Breakpoints',
        loadComponent: () => import('./breakpoints/breakpoints.component').then(m => m.BreakpointsComponent),
      },
      {
        path: 'colors',
        title: 'CS - Colors',
        loadComponent: () => import('./colors/colors.component').then(m => m.ColorsComponent),
      },
      {
        path: 'columns',
        title: 'CS - Columns',
        loadComponent: () => import('./columns/columns.component').then(m => m.ColumnsComponent),
      },
      {
        path: 'gutters',
        title: 'CS - Flex',
        loadComponent: () => import('./gutters/gutters.component').then(m => m.GuttersComponent),
      },
      {
        path: 'helpers',
        title: 'CS - Helpers',
        loadComponent: () => import('./helpers/helpers.component').then(m => m.HelpersComponent),
      },
      {
        path: 'position',
        title: 'CS - Position',
        loadComponent: () => import('./position/position.component').then(m => m.PositionComponent),
      },
      {
        path: 'additional-content',
        title: 'CS - Additional Content',
        loadComponent: () => import('./additional-content/additional-content.component').then(m => m.AdditionalContentComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilitiesRoutingModule {
  static routes=routes

}
