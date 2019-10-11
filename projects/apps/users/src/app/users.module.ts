import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StateAppModule } from 'projects/libs/state-app/src/lib/state-app.module';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    StateAppModule,
    UsersRoutingModule
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class UsersModule { }
