import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { RouterLink } from '@angular/router';
import { CsDropdownsComponent } from 'src/app/_cs/reusable-ui-elements/cs-dropdowns/cs-dropdowns.component';

@Component({
    selector: 'app-file-manager-list',
    standalone:true,
    templateUrl: './file-manager-list.component.html',
    styleUrls: ['./file-manager-list.component.scss'],
    imports: [PageHeaderComponent, RouterLink,CsDropdownsComponent]
})
export class FileManagerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  page =1;

files = [
    { name: 'videos', size: '4.23gb', imageUrl: './assets/images/media/file-manager/1.png' },
    { name: 'Images', size: '1.23gb', imageUrl: './assets/images/media/file-manager/1.png' },
    { name: 'Downloads', size: '453kb', imageUrl: './assets/images/media/file-manager/1.png' },
    { name: 'document.pdf', size: '23kb', imageUrl: './assets/images/media/file-manager/5.png' },
    { name: 'document.pdf', size: '23kb', imageUrl: './assets/images/media/file-manager/5.png' },
    { name: 'Word document', size: '8.97mb', imageUrl: './assets/images/media/file-manager/3.png' },
    { name: 'document.pdf', size: '23kb', imageUrl: './assets/images/media/file-manager/5.png' },
    { name: 'Downloads', size: '453kb', imageUrl: './assets/images/media/file-manager/1.png' },
    { name: 'document.pdf', size: '23kb', imageUrl: './assets/images/media/file-manager/5.png' },
    { name: 'document.pdf', size: '23kb', imageUrl: './assets/images/media/file-manager/5.png' },
    { name: 'document.pdf', size: '23kb', imageUrl: './assets/images/media/file-manager/5.png' },
    { name: 'Downloads', size: '23kb', imageUrl: './assets/images/media/file-manager/1.png' },
    { name: 'Document', size: '453kb', imageUrl: './assets/images/media/file-manager/4.png' },
    { name: 'login image', size: '2.97mb', imageUrl: './assets/images/media/file-manager/2.png' },
    { name: 'beach image', size: '1.45Gb', imageUrl: './assets/images/media/file-manager/2.png' },
    { name: 'sky image', size: '2.25Gb', imageUrl: './assets/images/media/file-manager/2.png' },
    { name: 'Sea', size: '4.55kb', imageUrl: './assets/images/media/file-manager/2.png' },
    { name: 'Outdoor Image', size: '7.62mb', imageUrl: './assets/images/media/file-manager/2.png' },
  ];
}
