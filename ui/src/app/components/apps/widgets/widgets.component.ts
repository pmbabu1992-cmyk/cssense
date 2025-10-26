import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgbCarousel, NgbSlide, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { CsWidgetCard1Component } from 'src/app/_cs/reusable-widgets-cards/cs-widget-card1/cs-widget-card1.component';
import { CsWidgetCard2Component } from 'src/app/_cs/reusable-widgets-cards/cs-widget-card2/cs-widget-card2.component';
import { CsWidgetCard3Component } from 'src/app/_cs/reusable-widgets-cards/cs-widget-card3/cs-widget-card3.component';
import { CsWidgetCard4Component } from 'src/app/_cs/reusable-widgets-cards/cs-widget-card4/cs-widget-card4.component';
import { CsWidgetCard5Component } from 'src/app/_cs/reusable-widgets-cards/cs-widget-card5/cs-widget-card5.component';
import { CsWidgetCard6Component } from 'src/app/_cs/reusable-widgets-cards/cs-widget-card6/cs-widget-card6.component';
import { CsWidgetCard7Component } from 'src/app/_cs/reusable-widgets-cards/cs-widget-card7/cs-widget-card7.component';
import { CommonModule } from '@angular/common';
import { CsReusableTablesComponent } from 'src/app/_cs/cs-reusable-tables/cs-reusable-tables.component';
import { CsDropdownsComponent } from 'src/app/_cs/reusable-ui-elements/cs-dropdowns/cs-dropdowns.component';

@Component({
    selector: 'app-widgets',
    standalone:true,
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.scss'],
    imports: [CommonModule,PageHeaderComponent,CsWidgetCard1Component,CsWidgetCard2Component,CsWidgetCard3Component,CsWidgetCard4Component,CsWidgetCard5Component,CsWidgetCard6Component,CsWidgetCard7Component,CsReusableTablesComponent,
      NgbCarousel, NgbSlide, CsDropdownsComponent,
      NgbDropdownItem, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class WidgetsComponent { 

  cards = [
    {
      icon: 'users',
      title: 'Members',
      value: 600,
      bgColor: 'bg-primary'
    },
    {
      icon: 'shopping-cart',
      title: 'Sales',
      value: 854,
      bgColor: 'bg-danger'
    },
    {
      icon: 'bar-chart-2',
      title: 'Profits',
      value: '98K',
      bgColor: 'bg-success'
    },
    {
      icon: 'pie-chart',
      title: 'Taxes',
      value: 876,
      bgColor: 'bg-warning'
    }
  ];

  cards1 = [
    {
      icon: 'si-basket-loaded',
      title: 'Services',
      value: '$124',
      footerText: 'Daily Orders',
      footerIcon: 'si-arrow-down-circle',
      footerIconColor: 'text-warning',
   
    },
    {
      icon: 'si-credit-card',
      title: 'Sources',
      value: '$124',
      footerText: 'Less Sales',
      footerIcon: 'si-arrow-up-circle',
      footerIconColor: 'text-success',
      
    },
    {
      icon: 'si-chart',
      title: 'Income',
      value: '21%',
      footerText: 'From Last Month',
      footerIcon: 'si-exclamation',
      footerIconColor: 'text-info',
     
    },
    {
      icon: 'si-si si-social-facebook',
      title: 'Followers',
      value: '24K',
      footerText: 'Recent History',
      footerIcon: 'si-check',
      footerIconColor: 'text-primary',
     
    }
  ];

  users = [
    {
      name: 'Alexander Pierce',
      role: 'Founder & CEO',
      imageUrl: './assets/images/faces/17.jpg',
      sales: '3,200',
      followers: '13,000',
      products: 35,
      bgColor: 'bg-primary'
    },
    {
      name: 'Alexander Pierce',
      role: 'Founder & CEO',
      imageUrl: './assets/images/faces/12.jpg',
      sales: '3,200',
      followers: '13,000',
      products: 35,
      bgColor: 'bg-danger'
    },
    {
      name: 'Alexander Pierce',
      role: 'Founder & CEO',
      imageUrl: './assets/images/faces/5.jpg',
      sales: '3,200',
      followers: '13,000',
      products: 35,
      bgColor: 'bg-success'
    }
  ];
  cards2 = [
    {
      title: 'Sales',
      description: 'On the other hand, we denounce with right indignation and dislike imagesralized',
      todayValue: '3,256',
      weekValue: '25,321',
      monthValue: '53,625',
      progressPercentage: 50,
      progressBarClass: 'bg-primary'
    },
    {
      title: 'Profit',
      description: 'On the other hand, we denounce with right indignation and dislike imagesralized',
      todayValue: '236 $',
      weekValue: '1,365 $',
      monthValue: '36,254 $',
      progressPercentage: 36,
      progressBarClass: 'bg-warning'
    }
  ];

  cards3 = [
    {
      title: 'Real time users',
      value: '154',
      percentage: '+0.98%',
      progressPercentage: 80,
      progressBarClass: 'primary',
      iconClass: 'typcn typcn-group-outline',
      iconColorClass: 'text-primary',
      description: 'Overview of Last month'
    },
    {
      title: 'Total visits',
      value: '5274',
      percentage: '-12.45%',
      progressPercentage: 60,
      progressBarClass: 'pink',
      iconClass: 'typcn typcn-chart-line-outline',
      iconColorClass: 'text-pink',
      description: 'Overview of Last month'
    },
    {
      title: 'Bounce Rate',
      value: '76.3%',
      percentage: '+13.52%',
      progressPercentage: 60,
      progressBarClass: 'teal',
      iconClass: 'typcn typcn-chart-bar-outline',
      iconColorClass: 'text-teal',
      description: 'Overview of Last month'
    },
    {
      title: 'Visits Duration',
      value: '5m 24s',
      percentage: '+19.5%',
      progressPercentage: 45,
      progressBarClass: 'purple',
      iconClass: 'typcn typcn-time',
      iconColorClass: 'text-purple',
      description: 'Overview of Last month'
    }
  ];
  cards4 = [
    {
      title: 'App Views',
      value: '19.89K',
      percentage: '+25%',
      progressPercentage: 25,
      progressBarClass: 'primary',
      iconClass: 'fe fe-eye project',
      iconColorClass: 'text-primary',
      description: 'Overview of Last month'
    },
    {
      title: 'New Users',
      value: '692',
      percentage: '+15%',
      progressPercentage: 25,
      progressBarClass: 'pink',
      iconClass: 'fe fe-users project',
      iconColorClass: 'text-pink',
      description: 'Overview of Last month'
    },
    {
      title: 'Churned Users',
      value: '286',
      percentage: '+08%',
      progressPercentage: 30,
      progressBarClass: 'warning',
      iconClass: 'ti-pulse project',
      iconColorClass: 'text-warning',
      description: 'Overview of Last month'
    },
    {
      title: 'Total Revenue',
      value: '$2.98M',
      percentage: '+35%',
      progressPercentage: 20,
      progressBarClass: 'success',
      iconClass: 'ti-bar-chart-alt project',
      iconColorClass: 'text-success',
      description: 'Overview of Last month'
    }
  ];

  cards5 = [
    {
      title: 'New users',
      value: '3,672',
      iconClass: 'mdi mdi-account-multiple text-primary',
      percentage: '+25%',
      percentageColorClass: 'text-success',
      subTitle: 'Monthly users',
      subValue: '50%'
    },
    {
      title: 'Total Tax',
      value: '$89,265',
      iconClass: 'mdi mdi-cube text-success',
      percentage: '$7,893',
      percentageColorClass: 'text-success',
      subTitle: 'Monthly Income',
      subValue: ''
    },
    {
      title: 'Total Profit',
      value: '$23,987',
      iconClass: 'mdi mdi-poll-box text-warning',
      percentage: '$4,678',
      percentageColorClass: 'text-warning',
      subTitle: 'Monthly Profit',
      subValue: ''
    },
    {
      title: 'Total Sales',
      value: '46,486',
      iconClass: 'fa fa-cart-plus text-danger',
      percentage: '3,756',
      percentageColorClass: 'text-danger',
      subTitle: 'Monthly Sales',
      subValue: ''
    }
  ];
  cards6 = [
    {
      title: 'Total Revenue',
      value: '$125,465',
      iconClass: 'ti-bar-chart',
      bgColorClass: 'bg-primary-transparent',
      iconColorClass: 'text-primary'
    },
    {
      title: 'Marketing Spend',
      value: '$75,045',
      iconClass: 'ti-pie-chart',
      bgColorClass: 'bg-pink-transparent',
      iconColorClass: 'text-pink'
    },
    {
      title: 'Total Profit',
      value: '$46,352',
      iconClass: 'ti-pulse',
      bgColorClass: 'bg-teal-transparent',
      iconColorClass: 'text-teal'
    },
    {
      title: 'Total Investment',
      value: '62%',
      iconClass: 'ti-stats-up',
      bgColorClass: 'bg-success-transparent',
      iconColorClass: 'text-success'
    }
  ];

  projects = [
    {
      name: 'Lilly',
      postTitle: 'posted in Website',
      postContent: "Awesome websites!",
      timeAgo: '2 hours ago',
      imageUrl: './assets/images/faces/13.jpg',
    },
    {
      name: 'Thomos',
      postTitle: 'posted in Material',
      postContent: "Awesome websites!",
      timeAgo: '3 hours ago',
      imageUrl: './assets/images/faces/1.jpg',
    },
    {
      name: 'Marry Cott',
      postTitle: 'posted in Photo',
      postContent: "That's Great!",
      timeAgo: '1 hour ago',
      imageUrl: './assets/images/faces/2.jpg',
    },
    {
      name: 'John',
      postTitle: 'posted in Status',
      postContent: "Awesome websites!",
      timeAgo: '1 hour ago',
      imageUrl: './assets/images/faces/11.jpg',
    }
  ];

  teamMembers = [
    {
      name: 'Victoria',
      imageUrl: './assets/images/faces/2.jpg',
      description: 'On the other hand, we denounce with right indignation and dislike imagesralized.',
    },
    {
      name: 'Nathan',
      imageUrl: './assets/images/faces/3.jpg',
      description: 'On the other hand, we denounce with right indignation and dislike imagesralized.',
    },
    {
      name: 'Alice',
      imageUrl: './assets/images/faces/11.jpg',
      description: 'On the other hand, we denounce with right indignation and dislike imagesralized.',

    }
  ];

  countries = [
    {
      name: 'USA',
      flagUrl: './assets/images/flags/us_flag.jpg',
      amount: '$5235',
      progress: 55,
      progressColor: 'bg-primary'
    },
    {
      name: 'Spain',
      flagUrl: './assets/images/flags/spain_flag.jpg',
      amount: '$3214',
      progress: 42,
      progressColor: 'bg-danger'
    },
    {
      name: 'Germany',
      flagUrl: './assets/images/flags/germany_flag.jpg',
      amount: '$4123',
      progress: 32,
      progressColor: 'bg-success'
    },
    {
      name: 'Russia',
      flagUrl: './assets/images/flags/russia_flag.jpg',
      amount: '$1543',
      progress: 28,
      progressColor: 'bg-warning'
    },
    {
      name: 'Italy',
      flagUrl: './assets/images/flags/italy_flag.jpg',
      amount: '$1543',
      progress: 25,
      progressColor: 'bg-teal'
    },
    {
      name: 'French',
      flagUrl: './assets/images/flags/french_flag.jpg',
      amount: '$1543',
      progress: 23,
      progressColor: 'bg-info'
    }
  ];
  OrderData = [
    {
      name: 'Lottie Arnold',
      productNumber: '#PRD-10250',
      profileImage: './assets/images/faces/3.jpg',
      images: ['./assets/images/ecommerce/03.jpg', './assets/images/ecommerce/08.jpg']
    },
    {
      name: 'Alan Macedo',
      productNumber: '#PRD-10251',
      profileImage: './assets/images/faces/9.jpg',
      images: ['./assets/images/ecommerce/04.jpg', './assets/images/ecommerce/05.jpg']
    },
    {
      name: 'Bruce Tran',
      productNumber: '#PRD-10252',
      profileImage: './assets/images/faces/5.jpg',
      images: ['./assets/images/ecommerce/06.jpg', './assets/images/ecommerce/07.jpg']
    },
    {
      name: 'Mina Harper',
      productNumber: '#PRD-10253',
      profileImage: './assets/images/faces/12.jpg',
      images: ['./assets/images/ecommerce/08.jpg', './assets/images/ecommerce/09.jpg']
    },
    {
      name: 'Maria Quinn',
      productNumber: '#PRD-10254',
      profileImage: './assets/images/faces/8.jpg',
      images: ['./assets/images/ecommerce/02.jpg', './assets/images/ecommerce/01.jpg']
    }
  ];

  ratings = [
    {
      name: 'Joanne Scott',
      imageUrl: './assets/images/faces/5.jpg',
      productNumber: '#PRD-10250',
      rating: 4.5, // 5 stars
      reviewText: "long established fact..",
      time: '5 reviews',
      reviewDate: '2 hours ago'
    },
    {
      name: 'Cristobal Sharp',
      imageUrl: './assets/images/faces/9.jpg',
      productNumber: '#PRD-10251',
      rating: 4, // 4 stars
      reviewText: "The point of using Lorem..",
      time: '5 reviews',
      reviewDate: '3 hours ago'
    },
    {
      name: 'Velma Wellons',
      imageUrl: './assets/images/faces/4.jpg',
      productNumber: '#PRD-10252',
      rating: 4.5, // 5 stars
      reviewText: "Various versions have..",
      time: '5 reviews',
      reviewDate: '1 hours ago'
    },
    {
      name: 'Cathie Madonna',
      imageUrl: './assets/images/faces/7.jpg',
      productNumber: '#PRD-10253',
      rating: 4, // 4 stars
      reviewText: "long established fact..",
      time: '5 reviews',
      reviewDate: '1 hours ago'
    },
    {
      name: 'Aurelio Dahmer',
      imageUrl: './assets/images/faces/12.jpg',
      productNumber: '#PRD-10254',
      rating: 4.5, // 5 stars
      reviewText: "Ut enim ad minim veniam..",
      time: '5 reviews',
      reviewDate: '1 hour ago'
    },
    {
      name: 'Cyrus Macarthur',
      imageUrl: './assets/images/faces/13.jpg',
      productNumber: '#PRD-10255',
      rating: 4, // 4 stars
      reviewText: "variations of passages..",
      time: '5 reviews',
      reviewDate: '2 hours ago'
    },
    {
      name: 'Bernardo Sykes',
      imageUrl: './assets/images/faces/2.jpg',
      productNumber: '#PRD-10256',
      rating: 4.5, // 5 stars
      reviewText: "you are going to use..",
      time: '5 reviews',
      reviewDate: '2 hours ago'
    }
  ];

  countries1 = [
    {
      name: 'United States',
      sales: 273.12,
      percentage: 2.17,
      progress: 60,
      liClass: '',
      progressColor: 'bg-success'
    },
    {
      name: 'United Kingdom',
      sales: 423.10,
      percentage: 12.43,
     liClass: '',
      progress: 70,
      progressColor: 'bg-info'
    },
    {
      name: 'Australia',
      sales: 547.18,
      percentage: 3.14,
     liClass: '',
      progress: 60,
      progressColor: 'bg-danger'
    },
    {
      name: 'Canada',
      sales: 728.32,
      percentage: 7.23,
     liClass: '',
      progress: 50,
      progressColor: 'bg-warning'
    },
    {
      name: 'Russia',
      sales: 843.19,
      percentage: 1.83,
     liClass: '',
      progress: 40,
      progressColor: 'bg-success'
    },
    {
      name: 'Japan',
      sales: 562.19,
      percentage: 1.35,
     liClass: 'mb-0',
      progress: 60,
      progressColor: 'bg-purple'
    }
  ];
  browserStats = [
    {
      name: 'Chrome',
      imageUrl: './assets/images/svgicons/chrome.svg',
      sessions: 35502,
      percentage: 12.75,
      trend: 'up',
      color: 'text-success',
      description: 'Mozilla Foundation, Inc.'
    },
    {
      name: 'Opera',
      imageUrl: './assets/images/svgicons/opera.svg',
      sessions: 12563,
      percentage: -15.12,
      trend: 'down',
      color: 'text-danger',
      description: 'Mozilla Foundation, Inc.'
    },
    {
      name: 'Edge',
      imageUrl: './assets/images/svgicons/edge.svg',
      sessions: 25364,
      percentage: 24.37,
      trend: 'up',
      color: 'text-success',
      description: 'Mozilla Foundation, Inc.'
    },
    {
      name: 'Firefox',
      imageUrl: './assets/images/svgicons/firefox.svg',
      sessions: 14635,
      percentage: 15.63,
      trend: 'up',
      color: 'text-success',
      description: 'Mozilla Foundation, Inc.'
    },
    {
      name: 'Ucbrowser',
      imageUrl: './assets/images/svgicons/uc-browser.svg',
      sessions: 15453,
      percentage: -23.70,
      trend: 'down',
      color: 'text-danger',
      description: 'Mozilla Foundation, Inc.'
    },
    {
      name: 'Safari',
      imageUrl: './assets/images/svgicons/safari.svg',
      sessions: 35657,
      percentage: -12.54,
      trend: 'down',
      color: 'text-danger',
      description: 'Mozilla Foundation, Inc.'
    }
  ];

  getStarRating(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return { fullStars, halfStars, emptyStars };
  }
  constructor() {}

  ngOnInit(): void {}

  hideNavigationArrows = false;
  hideNavigationIndicators = false;

  data1 = [
    {
      icon: 'si si-social-facebook',
      date: '12th June',
      img: './assets/images/media/media-28.jpg',
      offer: '20% Off',
      name: 'Trevor Hart',
    },
    {
      icon: 'ri-twitter-x-line',
      date: '16th June',
      img: './assets/images/media/media-31.jpg',
      offer: '60% Off',
      name: 'Joseph Vaughan',
    },
    {
      icon: 'si si-social-google',
      date: '14th august',
      img: './assets/images/media/media-32.jpg',
      offer: '40% Off',
      name: 'Alan Hemmings',
    },
  ];

  data2 = [
    {
      icon: 'si si-social-google',
      date: '21th June',
      img: './assets/images/media/media-28.jpg',
      offer: '60% Off',
      name: ' Alan Hemmings',
    },
    {
      icon: 'si si-social-facebook',
      date: '16th June',
      img: './assets/images/media/media-31.jpg',
      offer: '80% Off',
      name: 'Eric Lee',
    },
    {
      icon: 'ri-twitter-x-line',
      date: '24th august',
      img: './assets/images/media/media-32.jpg',
      offer: '50% Off',
      name: 'Joseph Vaughan',
    },
  ];

  data3 = [
    {
      icon: 'ri-twitter-x-line',
      date: '30th June',
      img: './assets/images/media/media-28.jpg',
      offer: '20% Off',
      name: 'Joseph Vaughan',
    },
    {
      icon: 'si si-social-facebook',
      date: '18th June',
      img: './assets/images/media/media-31.jpg',
      offer: '60% Off',
      name: ' Alan Hemmings',
    },
    {
      icon: 'si si-social-google',
      date: '20th august',
      img: './assets/images/media/media-32.jpg',
      offer: '40% Off',
      name: 'Eric Lee',
    },
  ];
}
