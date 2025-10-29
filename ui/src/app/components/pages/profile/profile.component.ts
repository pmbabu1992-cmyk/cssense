import { Component, OnInit } from '@angular/core';
import {
  Image,
  ModalGalleryRef,
  ModalGalleryService,
} from '@ks89/angular-modal-gallery';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { PageHeaderComponent } from '../../../shared/componets/page-header/page-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GallerizeDirective } from 'ng-gallery/lightbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CsProfileCardComponent } from 'src/app/_cs/reusable-pages/cs-profile-card/cs-profile-card.component';
import { CsProfileFriendsComponent } from 'src/app/_cs/reusable-pages/cs-profile-friends/cs-profile-friends.component';

@Component({
    selector: 'app-profile',
    standalone:true,
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    imports: [PageHeaderComponent,GallerizeDirective,NgbModule, FormsModule,CommonModule,CsProfileCardComponent,CsProfileFriendsComponent]
})
export class ProfileComponent implements OnInit {
  public GalleryImage: Image[] = [
    new Image(1, {
      //modal
      img: './assets/images/media/media-71.jpg',
      title: '',
    }),
    new Image(2, {
      //modal
      img: './assets/images/media/media-70.jpg',
      title: '',
    }),
    new Image(3, {
      //modal
      img: './assets/images/media/media-72.jpg',
      title: '',
    }),
    new Image(4, {
      //modal
      img: './assets/images/media/media-69.jpg',
      title: '',
    }),
    new Image(5, {
      //modal
      img: './assets/images/media/media-71.jpg',
      title: '',
    }),
    new Image(6, {
      //modal
      img: './assets/images/media/media-71.jpg',
      title: '',
    }),
    new Image(7, {
      //modal
      img: './assets/images/media/media-71.jpg',
      title: '',
    }),
    new Image(8, {
      //modal
      img: './assets/images/media/media-71.jpg',
      title: '',
    }),
    new Image(9, {
      //modal
      img: './assets/images/media/media-71.jpg',
      title: '',
    }),
  ];

  url1: string = ''; // Assuming url1 is a property in your component

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) { 
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url1 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  constructor(
    private modalGalleryService: ModalGalleryService,
    public gallery: Gallery
  ) {}

  items!: GalleryItem[];

  imageData = data;

  ngOnInit() {
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }

  openImageModalRowDescription(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(
      image,
      this.GalleryImage
    );
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.GalleryImage,
      currentImage: this.GalleryImage[index],
    }) as ModalGalleryRef;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }

  socialLinks = [
    {
      iconClass: 'ion-logo-github',
      name: 'Github',
      link: 'github.com/cssense',
      bgClass: 'media-icon bg-primary-transparent ',
      textClass: 'text-primary',
    },
    {
      iconClass: 'ri-twitter-x-fill',
      name: 'Twitter',
      link: 'twitter.com/cs.sense',
      bgClass: 'media-icon bg-success-transparent',
      textClass: 'text-success',
    },
    {
      iconClass: 'ion-logo-linkedin',
      name: 'Linkedin',
      link: 'linkedin.com/in/cssense',
      bgClass: 'media-icon bg-info-transparent',
      textClass: 'text-info',
    },
    {
      iconClass: 'ion-md-link',
      name: 'My Portfolio',
      link: 'cs.sense.com/',
      bgClass: 'media-icon bg-danger-transparent',
      textClass: 'text-danger',
    }
  ];

  skills = [
    { name: 'HTML5 / CSS3', progress: 85, colorClass: 'bg-primary-gradient' },
    { name: 'Javascript', progress: 89, colorClass: 'bg-danger-gradient' },
    { name: 'Bootstrap', progress: 80, colorClass: 'bg-success-gradient' },
    { name: 'Coffee', progress: 95, colorClass: 'bg-info-gradient' }
  ];
  counters = [
    {
      iconClass: 'icon-layers',
      colorClass: 'bg-primary-transparent',
      title: 'Orders',
      value: '1,587',
      changeDirection: 'up',
      changePercentage: 'Increase'
    },
    {
      iconClass: 'icon-paypal',
      colorClass: 'bg-danger-transparent',
      title: 'Revenue',
      value: '46,782',
      changeDirection: 'up',
      changePercentage: 'Increase'
    },
    {
      iconClass: 'icon-rocket',
      colorClass: 'bg-success-transparent',
      title: 'Product sold',
      value: '1,890',
      changeDirection: 'up',
      changePercentage: 'Increase'
    }
  ];

  userCards = [
    {
      imageSrc: './assets/images/faces/1.jpg',
      name: 'James Thomas',
      role: 'Web Designer',
    },
    {
      imageSrc: './assets/images/faces/3.jpg',
      name: 'Reynante Labares',
      role: 'Web Designer',
    },
    {
      imageSrc: './assets/images/faces/4.jpg',
      name: 'Owen Bongcaras',
      role: 'Web Designer',
    },
    {
      imageSrc: './assets/images/faces/8.jpg',
      name: 'Stephen Metcalfe',
      role: 'Administrator',
    },
     {
      imageSrc: './assets/images/faces/2.jpg',
      name: 'Socrates Itumay',
      role: 'Project Manager',
    },
    {
      imageSrc: './assets/images/faces/3.jpg',
      name: 'Reynante Labares',
      role: 'Web Designer',
    },
    {
      imageSrc: './assets/images/faces/4.jpg',
      name: 'Owen Bongcaras',
      role: 'App Developer',
    },
    {
      imageSrc: './assets/images/faces/8.jpg',
      name: ' Stephen Metcalfe',
      role: 'Administrator',
    },
    {
      imageSrc: './assets/images/faces/11.jpg',
      name: 'Michel Mathew',
      role: 'Ui Developer',
    },
  ];
  
}


const data = [
  {
    srcUrl: './assets/images/media/media-71.jpg',
    previewUrl: './assets/images/media/media-71.jpg',
  },
  {
    srcUrl: './assets/images/media/media-70.jpg',
    previewUrl: './assets/images/media/media-70.jpg',
  },
  {
    srcUrl: './assets/images/media/media-69.jpg',
    previewUrl: './assets/images/media/media-69.jpg',
  },
  {
    srcUrl: './assets/images/media/media-68.jpg',
    previewUrl: './assets/images/media/media-68.jpg',
  },
  {
    srcUrl: './assets/images/media/media-67.jpg',
    previewUrl: './assets/images/media/media-67.jpg',
  },
  {
    srcUrl: './assets/images/media/media-66.jpg',
    previewUrl: './assets/images/media/media-66.jpg',
  },
  {
    srcUrl: './assets/images/media/media-65.jpg',
    previewUrl: './assets/images/media/media-65.jpg',
  },
  {
    srcUrl: './assets/images/media/media-36.jpg',
    previewUrl: './assets/images/media/media-36.jpg',
  },
  {
    srcUrl: './assets/images/media/media-35.jpg',
    previewUrl: './assets/images/media/media-35.jpg',
  },
  {
    srcUrl: './assets/images/media/media-66.jpg',
    previewUrl: './assets/images/media/media-66.jpg',
  },
  {
    srcUrl: './assets/images/media/media-65.jpg',
    previewUrl: './assets/images/media/media-65.jpg',
  },
  {
    srcUrl: './assets/images/media/media-36.jpg',
    previewUrl: './assets/images/media/media-36.jpg',
  },
];
