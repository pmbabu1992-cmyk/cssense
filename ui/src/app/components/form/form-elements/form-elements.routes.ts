import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    children: [
      {
        path: 'inputs',
        title: 'CS - Inputs',
        loadComponent: () => import('./inputs/inputs.component').then(m => m.InputsComponent),
      },
      {
        path: 'checks-radio',
        title: 'CS - Checks Radio',
        loadComponent: () => import('./checks-radio/checks-radio.component').then(m => m.ChecksRadioComponent),
      },
      {
        path: 'input-group',
        title: 'CS - Input Group',
        loadComponent: () => import('./input-group/input-group.component').then(m => m.InputGroupComponent),
      },
      {
        path: 'form-select',
        title: 'CS - Form Select',
        loadComponent: () => import('./form-select/form-select.component').then(m => m.FormSelectComponent),
      },
      {
        path: 'range-slider',
        title: 'CS - Range Slider',
        loadComponent: () => import('./range-slider/range-slider.component').then(m => m.RangeSliderComponent),
      },
      {
        path: 'input-masks',
        title: 'CS - Input Masks',
        loadComponent: () => import('./input-masks/input-masks.component').then(m => m.InputMasksComponent),
      },
      {
        path: 'file-uploads',
        title: 'CS - File Uploads',
        loadComponent: () => import('./file-uploads/file-uploads.component').then(m => m.FileUploadsComponent),
      },
      {
        path: 'datetimepicker',
        title: 'CS - Date Time Picker',
        loadComponent: () => import('./date-time-picker/date-time-picker.component').then(m => m.DateTimePickerComponent),
      },
      {
        path: 'colorpicker',
        title: 'CS - Color Pickers',
        loadComponent: () => import('./color-picker/color-picker.component').then(m => m.ColorPickerComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule { 
  static routes=routes
}
