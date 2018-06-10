import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigureModule } from './configure/configure.module';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

import { CanDeactivateGuard } from './core/services/deactivate.guard';
import { AuthGuard } from './core/services/auth.guard';

import { ConfigureComponent } from './configure/configure.component';
import { CertificateComponent } from './configure/certificate/certificate.component';
import { SupportComponent } from './configure/support/support.component';

// import { EventListResolverService } from './event-list/event-list-resolver.service';

const routes: Routes = [
  // order matters
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // // lazy loading
  // {
  //   path: 'configure',
  //   loadChildren: () => ConfigureModule,
  //   // loadChildren: './configure/configure.module#ConfigureModule',
  // },
  // eager loading
  {
    path: 'configure',
    component: ConfigureComponent,
    children: [
      { path: 'certificate', component: CertificateComponent },
      { path: 'support', component: SupportComponent },
      { path: '', redirectTo: 'certificate', pathMatch: 'full' },
    ],
  },
  { path: '**', component: NotFoundComponent },
  /* {
    path: 'events/create',
    // component: EventCreateComponent,
    canDeactivate: [CanDeactivateGuard],
    // canDeactivate: ['canDeactivateCreateEvent'],
    // Guarding Against Route De-activation using function, canDeactivateCreateEvent is provider name which points to a function
  },
  {
    path: 'events',
    component: EventListComponent,
    pathMatch: 'full',
    resolve: { events: EventListResolverService },
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    resolve: { event: EventDetailResolverService },
  },
  {
    path: 'events/session/create',
    component: SessionCreateComponent,
  },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, */
  // lazy loading
  // {
  //   path: 'user',
  //   loadChildren: lazyLoadingUserModule,
  //   canActivate: [AuthGuard],
  // },
  // lazy loading 2
  // { path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [AuthGuard] },
  // { path: '**', component: NotFoundComponent },
];

export const routedComponents = [HomeComponent, LoginComponent, NotFoundComponent];
export const routedServices = [
  // EventListResolverService, EventDetailResolverService
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
