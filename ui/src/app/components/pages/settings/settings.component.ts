import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { CsPagesSettingsComponent } from 'src/app/_cs/reusable-pages/cs-pages-settings/cs-pages-settings.component';

@Component({
    selector: 'app-settings',
    standalone:true,
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    imports: [PageHeaderComponent,CsPagesSettingsComponent]
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  settings = [
    {
      iconClass: 'fe fe-home',
      title: 'Dashboard',
      description: 'Dashboard Settings such as sidemenu, header and main page can be controlled.',
      checkboxChecked: false,
      restoreText: 'Restore default'
    },
    {
      iconClass: 'fe fe-grid',
      title: 'Webapps',
      description: 'Web apps settings such as Apps, Elements, Advanced Ui & Mail can be controlled.',
      checkboxChecked: false,
      restoreText: 'Restore default'
    },
    {
      iconClass: 'fe fe-server',
      title: 'General',
      description: 'General settings such as Icons, Charts, Ecommerce can be controlled.',
      checkboxChecked: true,
      restoreText: 'Restore default'
    },
    {
      iconClass: 'fe fe-flag',
      title: 'Region & language',
      description: 'In this settings we can change the region and language manually.',
      checkboxChecked: false,
      restoreText: 'Restore default'
    },
    {
      iconClass: 'fe fe-bell',
      title: 'Notification',
      description: 'Notification settings we can control the notification privacy and security.',
      checkboxChecked: false,
      restoreText: 'Restore default'
    },
    {
      iconClass: 'fe fe-settings',
      title: 'Blog',
      description: 'In this settings we can modify all Blog related settings in this template.',
      checkboxChecked: true,
      restoreText: 'Restore default'
    }
  ];
}
