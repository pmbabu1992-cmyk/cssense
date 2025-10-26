import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: 'signin', title:"CS - Signin",
              loadComponent: () => import('./sign-in/sign-in.component').then(m => m.SignInComponent)
          },
          {
              path: 'sign-up', title:"CS - Sign Up",
              loadComponent: () => import('./sign-up/sign-up.component').then(m => m.SignUpComponent)
          },
          {
              path: 'forgot-password', title:"CS - Forgot Password",
              loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
          },
          {
              path: 'reset-password', title:"CS - Reset Password",
              loadComponent: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
          },
          {
              path: 'lockscreen', title:"CS - Lockscreen",
              loadComponent: () => import('./lockscreen/lockscreen.component').then(m => m.LockscreenComponent)
          },
          {
            path: 'under-construction', title:"CS - Under-construction",
            loadComponent: () => import('./under-construction/under-construction.component').then(m => m.UnderConstructionComponent)
          },
          {
            path: 'error404', title:"CS - Error 404",
            loadComponent: () => import('./error404/error404.component').then(m => m.Error404Component)
          },
          {
            path: 'error500', title:"CS - Error 500",
            loadComponent: () => import('./error500/error500.component').then(m => m.Error500Component)
          },
          {
            path: 'error501', title:"CS - Error 501",
            loadComponent: () => import('./error501/error501.component').then(m => m.Error501Component)
          }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPagesRoutingModule { 
  static routes=routes
}
