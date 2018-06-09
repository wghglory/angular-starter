import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule, routedComponents, routedServices } from './app-routing.module';

// app component
import { AppComponent } from './app.component';

// feature module components, some components below can be in its feature modules

@NgModule({
  declarations: [
    AppComponent,

    routedComponents,

    // feature components and directives
  ],
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule, SharedModule, AppRoutingModule],
  providers: [
    routedServices,

    // services
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
