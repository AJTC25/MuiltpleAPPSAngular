import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from 'projects/libs/state-app/src/lib/+state/reducer';
import { Observable } from 'rxjs';
import { getUsers, getOrders } from 'projects/libs/state-app/src/lib/+state/selectors';
import { ListUsers, ListOrders } from 'projects/libs/common/src/lib/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  titleApp = '';
  orders$: Observable<ListOrders>;

  constructor(private route: Router, private store: Store<State>) {
    this.orders$ = this.store.pipe(select(getOrders));
  }

  usersApp() {
    this.titleApp = 'APP Usuario';
    this.route.navigate(['/users/register']);
  }

  ordersApp() {
    this.titleApp = 'APP Ordenes';
    this.route.navigate(['/orders/register']);
  }

  productsApp() {
    this.titleApp = 'APP Productos';
    this.route.navigate(['/products/register']);
  }
}
