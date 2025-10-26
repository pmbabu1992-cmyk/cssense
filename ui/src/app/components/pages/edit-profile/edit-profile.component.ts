import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormsModule } from '@angular/forms';
import { NgSelectConfig, NgSelectComponent, NgOptionComponent } from '@ng-select/ng-select';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-edit-profile',
    standalone:true,
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
    imports: [PageHeaderComponent, FormsModule, NgSelectComponent, NgOptionComponent,CommonModule]
})
export class EditProfileComponent implements OnInit {

  profileForm: UntypedFormGroup;
  

  selectValue:any = null;
  selectValues = [
    { value: 1, label: 'US English' },
    { value: 2, label: 'Arabic' },
    { value: 3, label: 'Korean' }
  ];

  select!: UntypedFormControl

  constructor(
    private config: NgSelectConfig,
    private fb: UntypedFormBuilder
  ) {
    this.profileForm = this.fb.group({
      select : [this.selectValue]
      
    })
  }

  ngOnInit(): void {
    this.selectValue = this.selectValues[0];
  }

  url1: string = ''; // Assuming url1 is a property in your component

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) { 
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url1 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  socialLinks = [
    {
      iconClass: 'ion-logo-github',
      name: 'Github',
      link: 'github.com/spruko',
      bgClass: 'bg-primary-transparent media-icon ',
      textClass: 'text-primary',
    },
    {
      iconClass: 'ri-twitter-x-line',
      name: 'Twitter',
      link: 'twitter.com/spruko.me',
      bgClass: 'bg-success-transparent media-icon ',
      textClass: 'text-success',
    },
    {
      iconClass: 'ion-logo-linkedin',
      name: 'Linkedin',
      link: 'linkedin.com/in/spruko',
      bgClass: 'bg-info-transparent media-icon ',
      textClass: 'text-info',
    },
    {
      iconClass: 'ion-md-link',
      name: 'My Portfolio',
      link: 'spruko.com/',
      bgClass: 'bg-danger-transparent media-icon ',
      textClass: 'text-danger',
    }
  ];

  skills = [
    { name: 'HTML5 / CSS3', progress: 85, colorClass: 'bg-primary-gradient' },
    { name: 'Javascript', progress: 89, colorClass: 'bg-danger-gradient' },
    { name: 'Bootstrap', progress: 80, colorClass: 'bg-success-gradient' },
    { name: 'Coffee', progress: 95, colorClass: 'bg-info-gradient' }
  ];
}
