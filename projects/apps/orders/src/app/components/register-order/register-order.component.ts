import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'projects/libs/state-app/src/lib/+state/reducer';
import { getUsers, getProducts } from 'projects/libs/state-app/src/lib/+state/selectors';
import { ListUsers, Order, ListProducts } from 'projects/libs/common/src/lib/model';
import { NewOrder } from 'projects/libs/state-app/src/public-api';

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.css']
})
export class RegisterOrderComponent implements OnInit {
  userSelected = '';
  productSelected = '';
  users$: Observable<ListUsers>;
  products$: Observable<ListProducts>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(getUsers));
    this.products$ = this.store.pipe(select(getProducts));
  }

  save() {
    const order = {
      user: this.userSelected,
      product: this.productSelected
    } as Order;

    this.store.dispatch(NewOrder({ order }));
    alert('Orden guardada');
  }
}
