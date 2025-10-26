import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  {
    path: 'pages',
    children: [
      {
        path: 'mail',
        title: 'CS - Mail',
        loadComponent: () => import('./mail/mail.component').then(m => m.MailComponent),
      },
      {
        path: 'mail-compose',
        title: 'CS - Mail Compose',
        loadComponent: () => import('./mail-compose/mail-compose.component').then(m => m.MailComposeComponent),
      },
      {
        path: 'read-mail',
        title: 'CS - Mail Read',
        loadComponent: () => import('./read-mail/read-mail.component').then(m => m.ReadMailComponent),
      },
      {
        path: 'mail-settings',
        title: 'CS - Mail Settings',
        loadComponent: () => import('./mail-settings/mail-settings.component').then(m => m.MailSettingsComponent),
      },
      {
        path: 'chat',
        title: 'CS - Chat',
        loadComponent: () => import('./chat/chat.component').then(m => m.ChatComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { 
  static routes=routes
}
