import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegisterProductComponent } from './components/register-product/register-product.component';
import { CommonModule } from 'projects/libs/common/src/public-api';
import { FormsModule } from '@angular/forms';
import { ProductsExportRouting } from './products-export-routing.module';

@NgModule({
  declarations: [
    RegisterProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsExportRouting
  ],
  providers: [],
  bootstrap: []
})
export class ProductsExportModule { }
