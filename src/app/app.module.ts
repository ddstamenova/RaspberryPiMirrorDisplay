import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MirrorComponent } from './mirror/mirror.component';
import { ControllerComponent } from './controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    MirrorComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
