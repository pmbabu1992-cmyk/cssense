import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { RouterLink } from '@angular/router';
import { GallerizeDirective } from 'ng-gallery/lightbox';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog-details',
    standalone:true,
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss'],
    imports: [PageHeaderComponent, RouterLink, GallerizeDirective,CommonModule]
})
export class BlogDetailsComponent implements OnInit {
  items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery) {}

  ngOnInit() {
    // Creat gallery items
    this.items = this.imageData.map((item) => {
      return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
    });
  }

  reviews = [
    {
      name: 'Joanne Scott',
      userId: '#1234',
      image: './assets/images/faces/1.jpg',
      rating: 4.5,
      review: 'Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat.',
      BorderClass:'',
      timeAgo: '8 hrs ago',
      helpfulCount: 10
    },
    {
      name: 'Rose Slater',
      userId: '#5678',
      image: './assets/images/faces/3.jpg',
      rating: 4,
      review: 'Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris commodo consequat.',
      BorderClass:'border-top-0',
      timeAgo: '12 hrs ago',
      helpfulCount: 5
    },
    {
      name: 'Edward',
      userId: '#9012',
      image: './assets/images/faces/5.jpg',
      rating: 4,
      review: 'Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat.',
      BorderClass:'border-top-0',
      timeAgo: '3 days ago',
      helpfulCount: 3
    },
    {
      name: 'Camila Cabello',
      userId: '#3456',
      image: './assets/images/faces/6.jpg',
      rating: 5,
      review: 'Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris commodo consequat.',
      BorderClass:'border-top-0',
      timeAgo: '1 day ago',
      helpfulCount: 8
    }
  ];
}

const data = [
  {
    srcUrl: './assets/images/media/media-35.jpg',
    previewUrl: './assets/images/media/media-35.jpg',
  },
  {
    srcUrl: './assets/images/media/media-36.jpg',
    previewUrl: './assets/images/media/media-36.jpg',
  },
  {
    srcUrl: './assets/images/media/media-65.jpg',
    previewUrl: './assets/images/media/media-65.jpg',
  },
  {
    srcUrl: './assets/images/media/media-66.jpg',
    previewUrl: './assets/images/media/media-66.jpg',
  },
  {
    srcUrl: './assets/images/media/media-67.jpg',
    previewUrl: './assets/images/media/media-67.jpg',
  },
  {
    srcUrl: './assets/images/media/media-68.jpg',
    previewUrl: './assets/images/media/media-68.jpg',
  },
  {
    srcUrl: './assets/images/media/media-69.jpg',
    previewUrl: './assets/images/media/media-69.jpg',
  },
  {
    srcUrl: './assets/images/media/media-70.jpg',
    previewUrl: './assets/images/media/media-70.jpg',
  },
  {
    srcUrl: './assets/images/media/media-71.jpg',
    previewUrl: './assets/images/media/media-71.jpg',
  },
];
