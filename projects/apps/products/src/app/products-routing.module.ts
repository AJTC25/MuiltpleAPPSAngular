import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from './components/register-product/register-product.component';

const routes = [
    {
        path: 'register',
        component: RegisterProductComponent
    }
] as Routes;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductsRouting {

}
