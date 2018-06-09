import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigureRoutingModule, routedComponents } from './configure-routing.module';

@NgModule({
  imports: [CommonModule, ConfigureRoutingModule],
  declarations: [...routedComponents],
})
export class ConfigureModule {}
