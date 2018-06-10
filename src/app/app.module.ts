import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule, routedComponents, routedServices } from './app-routing.module';
// eager loading feature modules
// import { ConfigureModule } from './configure/configure.module';

// app component
import { AppComponent } from './app.component';

// feature module components, some components below can be in its feature modules

@NgModule({
  declarations: [
    AppComponent,

    routedComponents,

    // feature components and directives
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,

    // ConfigureModule,  // only need for eager loading. Remove it for lazying loading

    AppRoutingModule, // last
  ],
  providers: [
    routedServices,

    // services
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
