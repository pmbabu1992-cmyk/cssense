import { Routes } from '@angular/router';
import { Content_Routes } from './shared/routes/content.routes';
import { Full_Content_Routes } from './shared/routes/full.routes';
import { landing_page_Routes } from './shared/routes/landingpage';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    title: 'CS - Login',
    loadComponent: () => import('./authentication/authentication.component').then(m => m.AuthenticationComponent),
  },
  { path: '', loadComponent: () => import('./shared/layouts/full-layout/full-layout.component').then(m => m.FullLayoutComponent), children: Full_Content_Routes },
  { path: '', loadComponent: () => import('./shared/layouts/content-layout/content-layout.component').then(m => m.ContentLayoutComponent), children: Content_Routes },
  {
    path: '',
    loadComponent: () => import('./components/landing-page/landing-page/landing-page.component').then(m => m.LandingPageComponent),
    children: landing_page_Routes,
  },

  {
    path: '',
    title: 'CS - login',
    loadComponent: () =>
      import('./authentication/authentication.component').then(
        m => m.AuthenticationComponent
      ),
  },

  { path: '**', redirectTo: 'login' },
];


  
