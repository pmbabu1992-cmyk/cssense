import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { ShowcodeCardComponent } from 'src/app/shared/componets/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/forms/validations'
import { SharedModule } from 'src/app/shared/shared.module';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CsNgSelectComponent } from 'src/app/_cs/cs-ng-select/cs-ng-select.component';

@Component({
    selector: 'app-form-validation',
    standalone:true,
    templateUrl: './form-validation.component.html',
    styleUrls: ['./form-validation.component.scss'],
    imports: [SharedModule,PageHeaderComponent,CommonModule,FormsModule,ReactiveFormsModule,ShowcodeCardComponent,CsNgSelectComponent]
})
export class FormValidationComponent  {
  prismCode = prismCodeData;
  // Form1
  form!: FormGroup;
  submitted = false;
  submitted1 = true;
  submitted3 = false;
  stateOptions=[
    {value:1,label:'Choose...'},
    {value:2,label:'...'},
  ]
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    //Form1
    this.form = this.formBuilder.group({
      fullname: ['Mark', Validators.required],
      lastname: [
        'Otto',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      city: ['', Validators.required],
      state: ['', Validators.required],
      username: ['', Validators.required],
      zip: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
    //form1 END
    //Form4
    this.form4 = this.formBuilder.group({
      textarea: ['', Validators.required],
      checkbox: ['', Validators.required],
      radiostacked: ['', Validators.required],
      select: ['', Validators.required],
      feedback: ['', Validators.required],
    });
    // Form4END
    //Form3
    this.form3=this.formBuilder.group({
      name:['',Validators.required],
      lname: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      cit: ['', Validators.required],
      stat: ['', Validators.required],
      username: ['', Validators.required],
      zip: ['', Validators.required],
  
    })
    //Form2
    this.form2 =this.formBuilder.group({
      firstname: ['Mark', Validators.required],
      lastname:['Otto',Validators.required],
       username:['',Validators.required],
      city:['',Validators.required],
      zip:['',Validators.required],
      checkbox: [false, Validators.requiredTrue],
      state:['',Validators.required],
  
  
  
    })
  
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  
  OnSubmit(): void {
    this.submitted = true;
  
    if (this.form.invalid) {
      return;
    }
  }
  // Form4
  form4!: FormGroup;
  get f1(): { [key: string]: AbstractControl } {
    return this.form4.controls;
  }
  Submit(): void {
    this.submitted = true;
  
    if (this.form4.invalid) {
      return;
    }
  }
  
  //Form3
  form3!: FormGroup;
  get f3(): { [key: string]: AbstractControl } {
    return this.form3.controls;
  }
  Submit3(): void {
    this.submitted3 = true;
    console.log("one")
  
    if (this.form3.invalid) {
      return;
    }
  }
  
  
  //Form2
  public form2!: FormGroup;
  Submit1() {
   
  }
}


