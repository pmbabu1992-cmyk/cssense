import { Component, OnInit } from '@angular/core';
import {
  Image,
  ModalGalleryRef,
  ModalGalleryService,
} from '@ks89/angular-modal-gallery';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { GallerizeDirective } from 'ng-gallery/lightbox';

@Component({
    selector: 'app-gallery',
    standalone:true,
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    imports: [PageHeaderComponent, GallerizeDirective]
})
export class GalleryComponent implements OnInit {
  items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery) {}

  ngOnInit(): void {
    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }
}

const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
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
    srcUrl: './assets/images/media/media-67.jpg',
    previewUrl: './assets/images/media/media-67.jpg',
  },
  {
    srcUrl: './assets/images/media/media-70.jpg',
    previewUrl: './assets/images/media/media-70.jpg',
  },
];
