import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { CsNotificationCard1Component } from 'src/app/_cs/reusable-widget-notification/cs-notification-card1/cs-notification-card1.component';
import { CsNotificationCard2Component } from 'src/app/_cs/reusable-widget-notification/cs-notification-card2/cs-notification-card2.component';
import { CsNotificationCard3Component } from 'src/app/_cs/reusable-widget-notification/cs-notification-card3/cs-notification-card3.component';
import { CsNotificationCard5Component } from 'src/app/_cs/reusable-widget-notification/cs-notification-card5/cs-notification-card5.component';
import { CsNotificationCard4Component } from 'src/app/_cs/reusable-widget-notification/cs-notification-card4/cs-notification-card4.component';

@Component({
    selector: 'app-widget-notification',
    standalone:true,
    templateUrl: './widget-notification.component.html',
    styleUrls: ['./widget-notification.component.scss'],
    imports: [PageHeaderComponent,CsNotificationCard1Component,CsNotificationCard2Component,CsNotificationCard3Component,CsNotificationCard4Component,CsNotificationCard5Component]
})
export class WidgetNotificationComponent implements OnInit {
  public isClosed = false;
  public isClosed1 = false; 
  public isClosed2 = false;

  constructor() {}

  ngOnInit(): void {}

  Closetoggle(item: any) {
    if (item == 'one') {
      this.isClosed = true;
    }
  }
  Closetoggle1(item: any) {
    if (item == 'two') {
      this.isClosed1 = true;
    }
  }
  Closetoggle2(item: any) {
    if (item == 'three') {
      this.isClosed2 = true;
    }
  }

  messageCards = [
    {
      title: 'Success!',
      message: 'Thanks so much for your message. We check e-mail frequently and will try our best to respond to your inquiry.',
      cardType: 'success' as 'success' | 'danger' | 'warning'
    },
    {
      title: 'Danger!',
      message: 'Thanks so much for your message. We check e-mail frequently and will try our best to respond to your inquiry.',
      cardType: 'danger' as 'success' | 'danger' | 'warning'
    },
    {
      title: 'Warning!',
      message: 'Thanks so much for your message. We check e-mail frequently and will try our best to respond to your inquiry.',
      cardType: 'warning' as 'success' | 'danger' | 'warning'  
    }
  ];

  messageCards1 = [
    {
      title: 'Data Not Found.',
      IconClass: 'close',
      BgColor: 'danger' 
    },
    {
      title: 'Submitted Successfully',
      IconClass: 'check',
      BgColor: 'success' 
    },
    {
      title: 'Info Alert',
      IconClass: 'info',
      BgColor: 'info' 
    },
  ];
  messageCards2 = [
    {
      title: 'Data Not Found.',
      IconClass: 'close',
      BgColor: 'danger' 
    },
    {
      title: 'Submitted Successfully',
      IconClass: 'check',
      BgColor: 'success' 
    },
    {
      title: 'Info Alert',
      IconClass: 'info',
      BgColor: 'info' 
    },
  ];
  messageCards3 = [
    {
      title: 'Error Data',
      message: 'Oh snap! Change a few things up and try submitting again.',
      alertType: 'danger' as 'success' | 'danger' | 'info',
      isClosed: false
    },
    {
      title: 'Success Data',
      message: 'Well done! You successfully read this important alert message.',
      alertType: 'success' as 'success' | 'danger' | 'info',
      isClosed: false
    },
    {
      title: 'Info Data',
      message: 'Heads up! This alert needs your attention, but it\'s not super important.',
      alertType: 'info' as 'success' | 'danger' | 'info',
      isClosed: false
    }
  ];

  // Method to close alert
  closeAlert(index: number) {
    this.messageCards3[index].isClosed = true;
  }
  messageCards4 = [
    {
      title: 'Items Not Found',
      imageWidth:'w-35',
      subTitle: 'Check The Settings',
      images: './assets/images/svgicons/no-data.svg' 
    },
    {
      title: 'Its Empty In Here',
      imageWidth:'w-35',
      subTitle: 'Check The Settings',
      images: './assets/images/svgicons/note_taking.svg' 
    },
    {
      title: 'No Site Selected',
      imageWidth:'w-39',
      subTitle: 'Check The Settings',
      images: './assets/images/svgicons/imac.svg' 
    },
  ];
}
