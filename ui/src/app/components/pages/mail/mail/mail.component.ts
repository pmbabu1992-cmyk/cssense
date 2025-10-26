import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mail',
    standalone:true,
    templateUrl: './mail.component.html',
    styleUrls: ['./mail.component.scss'],
    imports: [PageHeaderComponent, RouterLink,CommonModule,FormsModule]
})
export class MailComponent implements OnInit {
  toggleMinMax = 'main-mail-compose';
  toggleFullScreen = "fas fa-compress";
  MaxMin: boolean = false;
  public fullScreen: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openSm(content:any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  selectAll(event: any) {
    const isChecked = event.target.checked;
    this.mailData.forEach(mail => mail.isChecked = isChecked);
  }
  mailData = [
    {
      id: 1,
      profileImage: './assets/images/faces/5.jpg',
      assignedTasks: 9,
      userName: 'Adrian Monino',
      subject: 'Someone who believes in you',
      description: 'enean commodo li gula eget dolor cum socia eget dolor enean commodo li gula eget dolor cum socia eget dolor',
      time: '11:30am',
      isChecked: false,
      isUnread: true,
      hasAttachment: true,
      isStarred: false
    },
    {
      id: 2,
      profileImage: './assets/images/faces/2.jpg',
      assignedTasks: 2,
      userName: 'Albert Ansing',
      subject: 'Here\'s What You Missed This Week',
      description: 'enean commodo li gula eget dolor cum socia eget dolor enean commodo li gula eget dolor cum socia eget dolor',
      time: '06:50am',
      isChecked: false,
      isUnread: true,
      hasAttachment: false,
      isStarred: true
    },
    {
      id: 3,
      profileImage: './assets/images/faces/9.jpg',
      assignedTasks: 0,
      userName: 'Carla Guden',
      subject: '4 Ways to Optimize Your Search',
      description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
      time: 'Yesterday',
      isChecked: false,
      isUnread: false,
      hasAttachment: true,
      isStarred: false
    },
    {
      id: 4,
      profileImage: './assets/images/faces/10.jpg',
      assignedTasks: 0,
      userName: 'Reven Galeon',
      subject: 'We\'re Giving a Macbook for Free',
      description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
      time: 'Yesterday',
      isChecked: false,
      isUnread: true,
      hasAttachment: false,
      isStarred: false
    },
    {
      id: 5,
      profileImage: './assets/images/faces/12.jpg',
      assignedTasks: 0,
      userName: 'Elisse Tan',
      subject: 'Keep Your Personal Data Safe',
      description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
      time: 'Oct 13',
      isChecked: false,
      isUnread: false,
      hasAttachment: false,
      isStarred: false
    },
    {
      id: 6,
      profileImage: './assets/images/faces/14.jpg',
      assignedTasks: 0,
      userName: 'Marianne Audrey',
      subject: 'We\'ve Made Some Changes',
      description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
      time: 'Oct 13',
      isChecked: false,
      isUnread: false,
      hasAttachment: false,
      isStarred: false
    },
    {
      id: 7,
      profileImage: './assets/images/faces/7.jpg',
      assignedTasks: 0,
      userName: 'Jane Phoebe',
      subject: 'Grab Our Holiday Deals',
      description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
      time: 'Oct 12',
      isChecked: false,
      isUnread: false,
      hasAttachment: false,
      isStarred: false
    },
    {
      id: 8,
      profileImage: './assets/images/faces/15.jpg',
      assignedTasks: 0,
      userName: 'Raffy Godinez',
      subject: 'Just a Few Steps Away',
      description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
      time: 'Oct 05',
      isChecked: false,
      isUnread: false,
      hasAttachment: false,
      isStarred: false
    },
    {
      id: 9,
      profileImage: './assets/images/faces/7.jpg',
      assignedTasks: 0,
      userName: 'Allan Cadungog',
      subject: 'Credit Card Promos',
      description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
      time: 'Oct 04',
      isChecked: false,
      isUnread: true,
      hasAttachment: false,
      isStarred: true
    },
    {
      id: 10,
      profileImage: './assets/images/faces/10.jpg',
      assignedTasks: 0,
      userName: 'Alfie Salinas',
      subject: '4 Ways to Optimize Your Search',
      description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
      time: 'Oct 02',
      isChecked: false,
      isUnread: false,
      hasAttachment: false,
      isStarred: false
    },
    {
      id: 11,
      profileImage: './assets/images/faces/1.jpg',
      assignedTasks: 0,
      userName: 'Jove Guden',
      subject: 'Keep Your Personal Data Safe',
      description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
      time: 'Oct 02',
      isChecked: false,
      isUnread: false,
      hasAttachment: false,
      isStarred: false
    }
  ];
}
