import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegisterOrderComponent } from './components/register-order/register-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StateAppModule } from 'projects/libs/state-app/src/lib/state-app.module';

@NgModule({
  declarations: [RegisterOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    OrdersRoutingModule,
    StateAppModule
  ],
  providers: [],
  bootstrap: [RegisterOrderComponent]
})
export class OrdersModule { }
