import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";




const routes: Routes = [
    {
        path: 'pages',
        children: [
            {
                path: 'editprofile', title:"CS - Editprofile",
                loadComponent: () => import('./edit-profile/edit-profile.component').then(m => m.EditProfileComponent)
            },
            {
                path: 'emptypage', title:"CS - Emptypage",
                loadComponent: () => import('./empty-page/empty-page.component').then(m => m.EmptyPageComponent)
            },
            {
                path: 'faqs', title:"CS - Faqs",
                loadComponent: () => import('./faqs/faqs.component').then(m => m.FaqsComponent)
            },
            {
                path: 'gallery', title:"CS - Gallery",
                loadComponent: () => import('./gallery/gallery.component').then(m => m.GalleryComponent)
            },
            {
                path: 'invoice', title:"CS - Invoice",
                loadComponent: () => import('./invoice/invoice.component').then(m => m.InvoiceComponent)
            },
            {
                path: 'pricing', title:"CS - Pricing",
                loadComponent: () => import('./pricing/pricing.component').then(m => m.PricingComponent)
            },
            {
                path: 'profile', title:"CS - Profile",
                loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
            },
            {
                path: 'todotask', title:"CS - Todotask",
                loadComponent: () => import('./todotask/todotask.component').then(m => m.TodotaskComponent)
            },
            {
                path: 'aboutus', title:"CS - Aboutus",
                loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent)
            },
            {
                path: 'settings', title:"CS - Settings",
                loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
            }
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
  static routes=routes

 }