import { Component} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators, Editor, Toolbar, NgxEditorModule } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/editor';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuillModule } from 'ngx-quill';
@Component({
    selector: 'app-quill-editor',
    standalone:true,
    templateUrl: './quill-editor.component.html',
    styleUrls: ['./quill-editor.component.scss'],
    imports: [PageHeaderComponent, FormsModule, ReactiveFormsModule, NgxEditorModule,SharedModule,QuillModule]
})
export class QuillEditorComponent {
  editordoc = jsonDoc;

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  htmlContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, laudantium! Praesentium maiores minima officia dolor architecto officiis delectus dicta a vel, dolorem amet quos quae esse iste ab voluptate alias?';
  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
