import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'advanced',
    children: [
      {
        path: 'accordion',
        title: 'CS - Accordion',
        loadComponent: () => import('./accordion/accordion.component').then(m => m.AccordionComponent),
      },
      {
        path: 'carousel',
        title: 'CS - Carousel',
        loadComponent: () => import('./carousel/carousel.component').then(m => m.CarouselComponent),
      },
      {
        path: 'modals',
        title: 'CS - Modals',
        loadComponent: () => import('./modals/modals.component').then(m => m.ModalsComponent),
      },
      {
        path: 'ratings',
        title: 'CS - Ratings',
        loadComponent: () => import('./ratings/ratings.component').then(m => m.RatingsComponent),
      },
      {
        path: 'search',
        title: 'CS - Search',
        loadComponent: () => import('./search/search.component').then(m => m.SearchComponent),
      },
      {
        path: 'sweet-alert',
        title: 'CS - Sweet Alerts',
        loadComponent: () => import('./sweet-alert/sweet-alert.component').then(m => m.SweetAlertComponent),
      },
      {
        path: 'timeline',
        title: 'CS - Timeline',
        loadComponent: () => import('./timeline/timeline.component').then(m => m.TimelineComponent),
      },
      {
        path: 'userlist',
        title: 'CS - Userlist',
        loadComponent: () => import('./userlist/userlist.component').then(m => m.UserlistComponent),
      },
      {
        path: 'offcanvas',
        title: 'CS - Offcanvas',
        loadComponent: () => import('./offcanvas/offcanvas.component').then(m => m.OffcanvasComponent),
      },
      {
        path: 'placeholders',
        title: 'CS - Placeholders',
        loadComponent: () => import('./placeholders/placeholders.component').then(m => m.PlaceholdersComponent),
      },
      {
        path: 'swiperjs',
        title: 'CS - Swiper JS',
        loadComponent: () => import('./swiperjs/swiperjs.component').then(m => m.SwiperjsComponent),
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AdvancedRoutingModule {
  static routes=routes
}