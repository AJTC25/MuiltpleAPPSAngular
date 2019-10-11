import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateAppModule } from 'projects/libs/state-app/src/lib/state-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StateAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
