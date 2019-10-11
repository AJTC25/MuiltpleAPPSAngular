import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'projects/libs/state-app/src/lib/+state/reducer';
import { Product } from 'projects/libs/common/src/lib/model';
import { NewProduct } from 'projects/libs/state-app/src/public-api';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  name = '';

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  save() {
    const product = {
      name: this.name
    } as Product;

    this.store.dispatch(NewProduct({ product }));

    alert('Producto guardado');
  }
}
