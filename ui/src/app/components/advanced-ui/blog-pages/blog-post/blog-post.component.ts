import { Component, ViewChild } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/editor';
import { CsNgSelectComponent } from 'src/app/_cs/cs-ng-select/cs-ng-select.component';
import { DropzoneComponent , DropzoneDirective,
  DropzoneConfigInterface, 
  DropzoneModule,
  DROPZONE_CONFIG} from 'ngx-dropzone-wrapper';
import { QuillModule } from 'ngx-quill';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};
@Component({
    selector: 'app-blog-post',
    standalone:true,
    templateUrl: './blog-post.component.html',
    providers: [
      {
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG
      }],
    styleUrls: ['./blog-post.component.scss'],
    imports: [PageHeaderComponent ,FormsModule,ReactiveFormsModule,DropzoneModule,NgxEditorModule,CsNgSelectComponent, QuillModule]
})
export class BlogPostComponent {
  constructor() { }


  public type: string = 'component';

  public disabled: boolean = false;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 100,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;
  public onUploadInit(args: any): void {
  }

  public onUploadError(args: any): void {
  }

  public onUploadSuccess(args: any): void {
  }
  BlogCategory=[
    {label:"Select",value:1},
    {label:"IT",value:2},
    {label:"Language",value:3},
    {label:"Science",value:4},
    {label:"Health",value:5},
    {label:"Humanities",value:6},
    {label:"Business",value:7},
    {label:"Maths",value:8},
    {label:"Marketing",value:9},
  ]
  Instructor=[
    {label:"Select",value:1},
    {label:"Pedro Cox",value:2},
    {label:"Vera Guzman",value:3},
    {label:"Glenda Long",value:4},
    {label:"Joel Anderson",value:5},
    {label:"Blanche Henderson",value:6},
  ]
}
