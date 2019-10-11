import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { OrdersModule } from './app/orders.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(OrdersModule)
  .catch(err => console.error(err));
