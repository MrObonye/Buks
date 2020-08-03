import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { IconsModule } from '../shared';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    IconsModule
  ]
})
export class ViewModule { }
