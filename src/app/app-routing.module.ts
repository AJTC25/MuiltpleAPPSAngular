import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('projects/apps/users/src/app/users-export.module').then(a => a.UsersExportModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('projects/apps/orders/src/app/orders-export.module').then(a => a.OrdersExportModule)
  },
  {
    path: 'products',
    loadChildren: () => import('projects/apps/products/src/app/products-export.module').then(a => a.ProductsExportModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
