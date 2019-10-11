import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'projects/libs/state-app/src/lib/+state/reducer';
import { NewUser } from 'projects/libs/state-app/src/public-api';
import { User } from 'projects/libs/common/src/lib/model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: string;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  guardar() {
    const user = {
      name: this.nombre
    } as User;

    this.store.dispatch(NewUser({ user }));
    alert('Usuario guardado');
  }
}
