import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routes} from "./app.routes"
import { provideHttpClient } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ToastrModule } from 'ngx-toastr';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { FlatpickrDefaults } from 'angularx-flatpickr';
import { ColorPickerModule } from 'ngx-color-picker';
import { provideQuillConfig, QuillModule } from 'ngx-quill'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        // optional theme options:
        // options: { darkModeSelector: 'system', cssLayer: false }
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideQuillConfig({
      modules: {
        syntax: true,
        toolbar: []
      }
    }),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FlatpickrDefaults,
    provideCharts(withDefaultRegisterables()),
    importProvidersFrom(
      BrowserAnimationsModule,
      ColorPickerModule,
      NgxEchartsModule.forRoot({
        echarts: () => import('echarts'),
      }),
      AngularFireModule.initializeApp(environment.firebase),
      QuillModule.forRoot(),
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,  
      progressBar: true,
    }),
    )
    ]
    
};

