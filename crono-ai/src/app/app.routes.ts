import { Routes } from '@angular/router';

import { AppLandingComponent } from './app-landing/app-landing.component';
import { AppFormComponent } from './app-form/app-form.component';

export const routes: Routes = [
  { path: '', component: AppLandingComponent },

  { path: 'form', component: AppFormComponent },
];
