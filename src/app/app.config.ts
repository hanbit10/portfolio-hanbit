import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IMAGE_CONFIG } from '@angular/common';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
        {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, // This kills the NG0913 warning
      }
    },
  ],
};