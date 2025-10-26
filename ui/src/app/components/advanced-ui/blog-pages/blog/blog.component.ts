import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog',
    standalone:true,
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    imports: [PageHeaderComponent, RouterLink]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mediaItems = [
    {
      category: 'Health',
      description: 'Health care and fitness awareness',
      timeAgo: '22 hrs ago',
      image: './assets/images/media/media-9.jpg'
    },
    {
      category: 'Beautician',
      description: 'Beautification courses are available.',
      timeAgo: '2 hrs ago',
      image: './assets/images/media/media-73.jpg'
    },
    {
      category: 'Tourism',
      description: 'Explore tourism by visiting places.',
      timeAgo: '2 days ago',
      image: './assets/images/media/media-84.jpg'
    },
    {
      category: 'Literature',
      description: 'English and Spanish classes in Your way',
      timeAgo: '1 week ago',
      image: './assets/images/media/media-34.jpg'
    },
    {
      category: 'Music',
      description: 'Music in a peaceful way',
      timeAgo: '1 day ago',
      image: './assets/images/media/media-72.jpg'
    }
  ];

  users = [
    {
      name: 'Samantha Melon',
      userId: '#1234',
      image: './assets/images/faces/3.jpg',
      timeAgo: '8 hrs ago',
      textColor:'success'
    },
    {
      name: 'Allie Grater',
      userId: '#1234',
      image: './assets/images/faces/11.jpg',
      timeAgo: '12 hrs ago',
      textColor:'danger'
    },
    {
      name: 'Gabe Lackmen',
      userId: '#1234',
      image: './assets/images/faces/17.jpg',
      timeAgo: '1 hr ago',
      textColor:'danger'
    },
    {
      name: 'Manuel Labor',
      userId: '#1234',
      image: './assets/images/faces/15.jpg',
      timeAgo: '3 days ago',
      textColor:'success'
    },
    {
      name: 'Stephen Nurrisht',
      userId: '#6547',
      image: './assets/images/faces/10.jpg',
      timeAgo: '2 hrs ago',
      textColor:'success'
    },
    {
      name: 'Manuel Labor',
      userId: '#1234',
      image: './assets/images/faces/13.jpg',
      timeAgo: '1 day ago',
      textColor:'danger'
    }
  ];

}
