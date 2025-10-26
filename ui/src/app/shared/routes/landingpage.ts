import { Routes } from "@angular/router";
import { LandingPageRoutingModule } from "src/app/components/landing-page/landing.routes";

export const landing_page_Routes: Routes = [
         {
        path: 'landing-page',
        children:[
          ...LandingPageRoutingModule.routes,
        
        ]
      }
]; 