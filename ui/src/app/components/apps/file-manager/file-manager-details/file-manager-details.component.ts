import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';
import { PageHeaderComponent } from '../../../../shared/componets/page-header/page-header.component';
import { RouterLink } from '@angular/router';
import { GallerizeDirective } from 'ng-gallery/lightbox';

@Component({
    selector: 'app-file-manager-details',
    standalone:true,
    templateUrl: './file-manager-details.component.html',
    styleUrls: ['./file-manager-details.component.scss'],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    encapsulation: ViewEncapsulation.None,
    imports: [PageHeaderComponent, RouterLink, GallerizeDirective]
})
export class FileManagerDetailsComponent implements OnInit {
  items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery) {
    setTimeout(() => {
      const svgs = document.querySelectorAll('.swiper-button-next svg, .swiper-button-prev svg');
      svgs.forEach(svg => {
        svg.setAttribute('width', '10px');  // Set your desired width
        svg.setAttribute('height', '10px'); // Set your desired height
      });
    }, 1000);
  }

  ngOnInit(): void {
  
    // Creat gallery items
    this.items = this.imageData.map((item) => {
      return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
    });
  }

  @ViewChild('swiperButtonNext') swiperButtonNext!: ElementRef;
  @ViewChild('swiperButtonPrev') swiperButtonPrev!: ElementRef;

  @ViewChild('swiperContainer1') swiperContainer1!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl1 = this.swiperContainer1.nativeElement;
    Object.assign(swiperEl1, {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation:true,
      loop: true,
      breakpoints: {
          320: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          480: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          1112: {
              slidesPerView: 3,
              spaceBetween: 10,
          },
          1300: {
              slidesPerView: 4,
              spaceBetween: 30,
          }
      },
	  });
	}

  slidesStore = [
    { src: './assets/images/media/media-78.jpg', title: '221.jpg', size: '120 KB' },
    { src: './assets/images/media/media-84.jpg', title: '222.jpg', size: '120 KB' },
    { src: './assets/images/media/media-82.jpg', title: '223.jpg', size: '120 KB' },
    { src: './assets/images/media/media-83.jpg', title: '224.jpg', size: '120 KB' },
    { src: './assets/images/media/media-81.jpg', title: '225.jpg', size: '120 KB' },
    { src: './assets/images/media/media-80.jpg', title: '226.jpg', size: '120 KB' },
    { src: './assets/images/media/media-77.jpg', title: '227.jpg', size: '120 KB' },
    { src: './assets/images/media/media-84.jpg', title: '228.jpg', size: '120 KB' },
    { src: './assets/images/media/media-79.jpg', title: '229.jpg', size: '120 KB' },
  ];
 
}

const data = [
  {
    srcUrl: './assets/images/media/media-84.jpg',
    previewUrl: './assets/images/media/media-84.jpg',
  },
  {
    srcUrl: './assets/images/media/media-83.jpg',
    previewUrl: './assets/images/media/media-83.jpg',
  },
  {
    srcUrl: './assets/images/media/media-82.jpg',
    previewUrl: './assets/images/media/media-82.jpg',
  },
  {
    srcUrl: './assets/images/media/media-77.jpg',
    previewUrl: './assets/images/media/media-77.jpg',
  },
  {
    srcUrl: './assets/images/media/media-81.jpg',
    previewUrl: './assets/images/media/media-81.jpg',
  },
  {
    srcUrl: './assets/images/media/media-80.jpg',
    previewUrl: './assets/images/media/media-80.jpg',
  },
  {
    srcUrl: './assets/images/media/media-79.jpg',
    previewUrl: './assets/images/media/media-79.jpg',
  },
  {
    srcUrl: './assets/images/media/media-78.jpg',
    previewUrl: './assets/images/media/media-78.jpg',
  },
];
