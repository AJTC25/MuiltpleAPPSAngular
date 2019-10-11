import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { ProductsModule } from './app/products.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ProductsModule)
  .catch(err => console.error(err));
