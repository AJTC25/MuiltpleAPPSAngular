import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { UsersExportRoutingModule } from './users-export-routing.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersExportRoutingModule
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class UsersExportModule { }
