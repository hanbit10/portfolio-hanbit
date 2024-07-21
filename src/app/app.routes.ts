import { Routes } from '@angular/router';
import { MainPageComponent } from './page/main-page/main-page.component';
import { ImpressumComponent } from './page/impressum/impressum.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'policy', component: PrivacyPolicyComponent },
];
