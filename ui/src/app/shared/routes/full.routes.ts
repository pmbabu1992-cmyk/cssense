import { Routes } from '@angular/router';
import { AdvancedRoutingModule  } from 'src/app/components/advanced-ui/advanced.routes';
import { BlogPagesRoutingModule } from 'src/app/components/advanced-ui/blog-pages/blog-pages.routes'
import { AppsRoutingModule } from 'src/app/components/apps/apps.routes.';
import { FileManagerRoutingModule } from 'src/app/components/apps/file-manager/file-manager-routes';
import { ApexchartsRoutingModule } from 'src/app/components/charts/apexcharts/apexcharts.routes';
import { ChartRoutingModule } from 'src/app/components/charts/charts.routes';
import { addUserRoutingModule } from 'src/app/components/cs/add-user/add-user.routes';
import { dashboardHtabsRoutingModule } from 'src/app/components/cs/dashboard-htabs/dashboard_htabs.routes';
import { LiveviewRoutingModule } from 'src/app/components/cs/liveview/liveview.routes';
import { totalUsersListRoutingModule } from 'src/app/components/cs/total-users-list/total-users-list.routes';
import { DashboardRoutingModule } from 'src/app/components/dashboard/dashboard.routes';
import { ElementsRoutingModule } from 'src/app/components/elements/elements.routes';
import { FormEditorsRoutingModule } from 'src/app/components/form/form-editors/form-editors.routes';
import { FormElementsRoutingModule } from 'src/app/components/form/form-elements/form-elements.routes';
import { FormRoutingModule } from 'src/app/components/form/form.routes';
import { IconRoutingModule } from 'src/app/components/icon/icon.routes';
import { MenuLevelsRoutingModule } from 'src/app/components/menu-levels/menu-levels.routes';
import { MailRoutingModule } from 'src/app/components/pages/mail/mail.routes';
import { PagesRoutingModule } from 'src/app/components/pages/pages.routes';
import { TablesRoutingModule } from 'src/app/components/tables/tables.routes';
import { UtilitiesRoutingModule } from 'src/app/components/utilities/utilities.routes';

//Route for content layout with sidebar, navbar and footer.

export const Full_Content_Routes: Routes = [

  {
    path:'',
    children:[
      ...DashboardRoutingModule.routes,
      ...IconRoutingModule.routes,
      ...ChartRoutingModule.routes,
      ...ApexchartsRoutingModule.routes,
      ...AppsRoutingModule.routes,
      ...FileManagerRoutingModule.routes,
      ...AdvancedRoutingModule.routes,
      ...BlogPagesRoutingModule.routes,
      ...ElementsRoutingModule.routes,
      ...AdvancedRoutingModule.routes,
      ...FormRoutingModule.routes,
      ...FormElementsRoutingModule.routes,
      ...FormEditorsRoutingModule.routes,
      ...TablesRoutingModule.routes,
      ...PagesRoutingModule.routes,
      ...MailRoutingModule.routes,
      ...UtilitiesRoutingModule.routes,
      ...MenuLevelsRoutingModule.routes,

      ...LiveviewRoutingModule.routes,
      ...dashboardHtabsRoutingModule.routes,
      ...addUserRoutingModule.routes,
      ...totalUsersListRoutingModule.routes,
    ]
  }
];
