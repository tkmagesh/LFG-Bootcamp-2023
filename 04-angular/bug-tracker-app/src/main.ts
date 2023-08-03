import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as moment from 'moment';
console.log(moment('2023-08-03T13:58:21.220Z').fromNow());

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
