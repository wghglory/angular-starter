import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LoginComponent } from './login/login.component';
// import { NotFoundComponent } from './not-found/not-found.component';

// import { UserModule } from './user/user.module';

import { CanDeactivateGuard } from './core/services/deactivate.guard';
import { AuthGuard } from './core/services/auth.guard';

// import { EventListResolverService } from './event-list/event-list-resolver.service';

// AOT builds: have to export a function. Cannot directly write lambda function down
// export function lazyLoadingUserModule() {
//   return UserModule;
// }

const routes: Routes = [
  // order matters
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

export const routedComponents = [
  // EventListComponent,
  // EventDetailComponent,
  // EventCreateComponent,
  // SessionCreateComponent,
  // LoginComponent,
  // NotFoundComponent,
];
export const routedServices = [
  // EventListResolverService, EventDetailResolverService
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
