import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent, HeaderComponent, FooterComponent, IconsModule   } from './shared/index';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
