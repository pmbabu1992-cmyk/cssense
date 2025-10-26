import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path:'advanced',
      children: [
          {
              path: 'blog', title:"CS - Blog",
              loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent)
          },
          {
              path: 'blog-details', title:"CS - Blog Details",
              loadComponent: () => import('./blog-details/blog-details.component').then(m => m.BlogDetailsComponent)
          },
            {
              path: 'blog-post', title:"CS - Blog Post",
              loadComponent: () => import('./blog-post/blog-post.component').then(m => m.BlogPostComponent)
          },
      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPagesRoutingModule { 
  static routes=routes
}
