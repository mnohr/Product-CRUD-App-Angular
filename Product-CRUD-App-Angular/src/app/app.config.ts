import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HttpErrorInterceptor } from './helpers/http-error.interceptor';
import { MatSnackBar } from '@angular/material/snack-bar';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(),
    provideAnimationsAsync(),
    MatSnackBar,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ]
};

