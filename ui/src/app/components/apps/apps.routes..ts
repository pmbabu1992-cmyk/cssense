import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: 'apps',
    children: [
      {
        path: 'calendar',
        title: 'CS - Calendar',
        loadComponent: () => import('./calendar/calendar.component').then(m => m.CalendarComponent),
      },
      {
        path: 'cards',
        title: 'CS - Cards',
        loadComponent: () => import('./cards/cards.component').then(m => m.CardsComponent),
      },
      {
        path: 'contacts',
        title: 'CS - Contacts',
        loadComponent: () => import('./contacts/contacts.component').then(m => m.ContactsComponent),
      },
      {
        path: 'draggablecards',
        title: 'CS - Draggablecards',
        loadComponent: () => import('./draggablecards/draggablecards.component').then(m => m.DraggablecardsComponent),
      },
      {
        path: 'notification',    
        title: 'CS - Notification',
        loadComponent: () => import('./notification/notification.component').then(m => m.NotificationComponent),
      },
      {
        path: 'widgets',
        title: 'CS - widgets',
        loadComponent: () => import('./widgets/widgets.component').then(m => m.WidgetsComponent),
      },
      {
        path: 'treeview',
        title: 'CS - Treeview',
        loadComponent: () => import('./treeview/treeview.component').then(m => m.TreeviewComponent),
      },
      {
        path: 'widgetnotification',
        title: 'CS - Widgetnotification',
        loadComponent: () => import('./widget-notification/widget-notification.component').then(m => m.WidgetNotificationComponent),
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppsRoutingModule {
  static routes=routes
}