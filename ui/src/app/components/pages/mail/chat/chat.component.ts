import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import {  NgbDropdownModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CsDropdownsComponent } from 'src/app/_cs/reusable-ui-elements/cs-dropdowns/cs-dropdowns.component';

@Component({
    selector: 'app-chat',
    standalone:true,
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    imports: [PageHeaderComponent,NgbNavModule,CommonModule,RouterLink,NgbTooltipModule,CsDropdownsComponent,NgbDropdownModule]
})
export class ChatComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
    let content:any = document.querySelector('#ChatList');
    let content1:any = document.querySelector('#ChatBody');

  }
  chatList = [
    { 
      name: 'Socrates Itumay',
      img: './assets/images/faces/5.jpg',
      status: 'online',
      time: '2 hours',
      message: 'Nam quam nunc, blandit vel aecenas et ante tincid',
      unreadMessages: 2,
      selected: false
    },
    {
      name: 'Dexter dela Cruz',
      img: './assets/images/faces/6.jpg',
      status: '',
      time: '3 hours',
      message: 'Maec enas tempus, tellus eget con dime ntum rhoncus, sem quam',
      unreadMessages: 1,
      selected: false
    },
    {
      name: 'Reynante Labares',
      img: './assets/images/faces/9.jpg',
      status: 'online',
      time: '10 hours',
      message: 'Nam quam nunc, bl ndit vel aecenas et ante tincid',
      unreadMessages: 0,
      selected: true
    },
    {
      name: 'Joyce Chua',
      img: './assets/images/faces/11.jpg',
      status: '',
      time: '2 days',
      message: 'Ma ecenas tempus, tellus eget con dimen tum rhoncus, sem quam',
      unreadMessages: 0,
      selected: false
    },
    {
      name: 'Rolando Paloso',
      img: './assets/images/faces/4.jpg',
      status: '',
      time: '2 days',
      message: 'Nam quam nunc, blandit vel aecenas et ante tincid',
      unreadMessages: 0,
      selected: false
    },
    {
      name: 'Ariana Monino',
      img: './assets/images/faces/7.jpg',
      status: '',
      time: '3 days',
      message: 'Maece nas tempus, tellus eget cond imentum rhoncus, sem quam',
      unreadMessages: 1,
      selected: false
    },
    {
      name: 'Maricel Villalon',
      img: './assets/images/faces/8.jpg',
      status: '',
      time: '4 days',
      message: 'Nam quam nunc, blandit vel aecenas et ante tincid',
      unreadMessages: 0,
      selected: false
    },
    {
      name: 'Maryjane Pechon',
      img: './assets/images/faces/12.jpg',
      status: '',
      time: '5 days',
      message: 'Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam',
      unreadMessages: 0,
      selected: false
    },
    {
      name: 'Lovely Dela Cruz',
      img: './assets/images/faces/5.jpg',
      status: '',
      time: '5 days',
      message: 'Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam',
      unreadMessages: 0,
      selected: false
    },
    {
      name: 'Daniel Padilla',
      img: './assets/images/faces/10.jpg',
      status: '',
      time: '5 days',
      message: 'Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam',
      unreadMessages: 0,
      selected: false
    },
    {
      name: 'John Pratts',
      img: './assets/images/faces/3.jpg',
      status: '',
      time: '6 days',
      message: 'Mae cenas tempus, tellus eget co ndimen tum rhoncus, sem quam',
      unreadMessages: 0,
      selected: false
    },
    {
      name: 'Raymart Santiago',
      img: './assets/images/faces/7.jpg',
      status: '',
      time: '6 days',
      message: 'Nam quam nunc, blandit vel aecenas et ante tincid',
      unreadMessages: 0,
      selected: false
    },
    {
      name: 'Samuel Lerin',
      img: './assets/images/faces/6.jpg',
      status: '',
      time: '7 days',
      message: 'Nam quam nunc, blandit vel aecenas et ante tincid',
      unreadMessages: 0,
      selected: false
    }
  ];

  chatList1 = [
    {
      name: 'Amelia Taylor',
      img: './assets/images/faces/5.jpg',
      unreadMessages: 2,
      status: 'online',
      time: 'Today, 05:30 AM',
      callType: 'outgoing', // Call type can be outgoing, incoming, or video
      message: 'Nam quam nunc, blandit vel aecenas et ante tincid',
      callStatus: "fe fe-phone-outgoing"
    },
    {
      name: 'Grace Russell',
      img: './assets/images/faces/4.jpg',
      unreadMessages: 1,
      status: 'online',
      time: 'Today, 12:15 PM',
      callType: 'outgoing',
      message: 'Maec enas tempus, tellus eget con dime ntum rhoncus, sem quam',
      callStatus: "fe fe-phone-outgoing"
    },
    {
      name: 'Joanne Miller',
      img: './assets/images/faces/9.jpg',
      unreadMessages: 3,
      status: 'online',
      time: 'Yesterday, 02:15 PM',
      callType: 'incoming',
      message: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
      callStatus: "fe fe-phone-outgoing"
    },
    {
      name: 'Kimberly Nolan',
      img: './assets/images/faces/12.jpg',
      unreadMessages: 2,
      status: 'offline',
      time: 'Yesterday, 05:39 PM',
      callType: 'video',
      callStatus: "fe fe-video",
      message: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
    },
    {
      name: 'Andrea Mackay',
      img: './assets/images/faces/6.jpg',
      unreadMessages: 2,
      status: 'offline',
      time: '29 June 2020, 03:21 AM',
      callType: 'phone-call',
      callStatus: "fe fe-phone-call",
      message: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam',
    },
    {
      name: 'Samantha Lewis',
      img: './assets/images/faces/1.jpg',
      unreadMessages: 2,
      status: 'online',
      time: '1 July 2020, 10:23 AM',
      callType: 'incoming',
      callStatus: "fe fe-phone-outgoing",
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      name: 'Victoria Kerr',
      img: './assets/images/faces/2.jpg',
      unreadMessages: 0,
      status: 'online',
      time: '1 July 2020, 4:45 PM',
      callType: 'incoming',
      callStatus: "fe fe-phone-call",
      message: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      name: 'Socrates Itumay',
      img: './assets/images/faces/7.jpg',
      unreadMessages: 4,
      status: 'online',
      time: '2 July 2020, 11:14 PM',
      callType: 'outgoing',
      callStatus: "fe fe-phone-outgoing",
      message: 'Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis.',
    },
    {
      name: 'Rebecca Johnston',
      img: './assets/images/faces/8.jpg',
      unreadMessages: 1,
      status: 'offline',
      time: '3 July 2020, 06:14 PM',
      callType: 'incoming',
      callStatus: "fe fe-phone-outgoing",
      message: 'Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue.',
    },
    {
      name: 'Madeleine James',
      img: './assets/images/faces/3.jpg',
      unreadMessages: 0,
      status: 'online',
      time: '4 July 2020, 5:12 PM',
      callType: 'outgoing',
      callStatus: "fe fe-phone-outgoing",
      message: 'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.',
    },
    {
      name: 'Raymart Santiago',
      img: './assets/images/faces/7.jpg',
      unreadMessages: 0,
      status: 'offline',
      time: '4 July 2020, 5:12 PM',
      callType: 'outgoing',
      callStatus: "fe fe-phone-outgoing",
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet ligula at ex sollicitudin',
    },
  ];
  chatGroups = [
    {
      name: 'Lillian Ross',
      image: './assets/images/faces/3.jpg',
      unreadMessages: 2,
      status: 'online',
      phoneStatus: 'fe-phone-outgoing',  // fe-phone-outgoing or fe-phone-incoming
      lastMessage: 'Nam quam nunc, blandit vel aecenas et ante tincid',
      timestamp: 'Today, 05:30 AM',
      location: 'Home'
    },
    {
      name: 'Socrates Itumay',
      image: './assets/images/faces/4.jpg',
      unreadMessages: 2,
      status: 'online',
      phoneStatus: 'fe-phone-outgoing',
      lastMessage: 'Maec enas tempus, tellus eget con dime ntum rhoncus',
      timestamp: 'Today, 12:15 PM',
      location: 'Mobile'
    },
    {
      name: 'Elizabeth Scott',
      image: './assets/images/faces/9.jpg',
      unreadMessages: 1,  // No unread messages, badge should be removed
      status: 'online',
      phoneStatus: 'fe-phone-incoming',
      lastMessage: 'Nam quam nunc, blandit vel aecenas et ante tincid',
      timestamp: 'Yesterday, 02:15 PM',
      location: 'Office'
    },
    {
      name: 'Cameron Watson',
      image: './assets/images/faces/5.jpg',
      unreadMessages: 2,
      status: 'online',
      phoneStatus: 'fe-phone-outgoing',
      lastMessage: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor',
      timestamp: 'Yesterday, 03:00 PM',
      location: 'Home'
    },
    {
      name: 'Christopher Arnold',
      image: './assets/images/faces/8.jpg',
      unreadMessages: 1,
      status: 'online',
      phoneStatus: 'fe-phone-incoming',
      lastMessage: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam',
      timestamp: 'Yesterday, 06:15 PM',
      location: 'Mobile'
    },
    {
      name: 'Justin Bailey',
      image: './assets/images/faces/4.jpg',
      unreadMessages: 2,
      status: 'online',
      phoneStatus: 'fe-phone-outgoing',
      lastMessage: 'Nam quam nunc, blandit vel aecenas et ante tincid',
      timestamp: 'Oct 13, 05:00 PM',
      location: 'Office'
    },
    {
      name: 'Richard Berry',
      image: './assets/images/faces/7.jpg',
      unreadMessages: 3,
      status: 'online',
      phoneStatus: 'fe-phone-incoming',
      lastMessage: 'Nam quam nunc, blandit vel aecenas et ante tincid',
      timestamp: 'Oct 12, 02:30 PM',
      location: 'Home'
    },
    {
      name: 'Abraham Clark',
      image: './assets/images/faces/9.jpg',
      unreadMessages: 6,
      status: 'online',
      phoneStatus: 'fe-phone-outgoing',
      lastMessage: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam',
      timestamp: 'Oct 05, 11:30 AM',
      location: 'Mobile'
    },
    {
      name: 'Marshall Fisher',
      image: './assets/images/faces/1.jpg',
      unreadMessages: 4,
      status: 'online',
      phoneStatus: 'fe-phone-incoming',
      lastMessage: 'viva mus elemen tum semper nisi enean vulputat',
      timestamp: 'Oct 04, 04:30 PM',
      location: 'Office'
    },
    {
      name: 'Samantha Lewis',
      image: './assets/images/faces/2.jpg',
      unreadMessages: 1,
      status: 'online',
      phoneStatus: 'fe-phone-outgoing',
      lastMessage: 'Sed ut perspiciatis unde omnis iste natus',
      timestamp: 'Oct 02, 02:00 PM',
      location: 'Home'
    }
  ];

}
