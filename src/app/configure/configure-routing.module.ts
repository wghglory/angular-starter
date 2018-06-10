import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigureComponent } from './configure.component';
import { SupportComponent } from './support/support.component';
import { CertificateComponent } from './certificate/certificate.component';

// only use this for lazy loading
const routes: Routes = [
  // // way 1: if certificate and support do share some html which can be placed in configure.component.html
  // {
  //   path: '',
  //   component: ConfigureComponent,
  //   children: [
  //     { path: '', redirectTo: 'certificate', pathMatch: 'full' },
  //     { path: 'certificate', component: CertificateComponent },
  //     { path: 'support', component: SupportComponent },
  //   ],
  // },
  // // way 2: certificate and support don't share any html, so no need to create configure.component
  // { path: 'certificate', component: CertificateComponent },
  // { path: 'support', component: SupportComponent },
  // { path: '', redirectTo: 'certificate', pathMatch: 'full' },
];

export const routedComponents = [ConfigureComponent, CertificateComponent, SupportComponent];
export const routedServices = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigureRoutingModule {}
