import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer, KEY_FEATURE } from './+state/reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature(KEY_FEATURE, reducer),
    StoreDevtoolsModule.instrument()
  ],
  exports: []
})
export class StateAppModule { }
