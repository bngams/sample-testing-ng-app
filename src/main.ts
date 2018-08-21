import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// material dependency
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// i18n
import { TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
const translations = require(`raw-loader!./app/locale/messages.fr.xlf`);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: TRANSLATIONS, useValue: translations },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ]
})
  .catch(err => console.log(err));
