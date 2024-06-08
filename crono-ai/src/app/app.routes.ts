import { Routes } from '@angular/router';

import { AppLandingComponent } from './app-landing/app-landing.component';
import { AppFormComponent } from './app-form/app-form.component';
import { AppApiKeysComponent } from './app-api-keys/app-api-keys.component';

export const routes: Routes = [
  { path: '', component: AppLandingComponent },

  { path: 'form', component: AppFormComponent },

  { path: 'api-keys', component: AppApiKeysComponent},
];
