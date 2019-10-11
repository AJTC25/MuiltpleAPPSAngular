import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterOrderComponent } from './components/register-order/register-order.component';
import { CommonModule } from '@angular/common';
import { OrdersExportRoutingModule } from './orders-export-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        RegisterOrderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        OrdersExportRoutingModule
    ],
    providers: [],
    bootstrap: [RegisterOrderComponent]
})
export class OrdersExportModule { }
