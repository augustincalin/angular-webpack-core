import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {AppModule} from './app.module';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app.component.ts';

platformBrowserDynamic().bootstrapModule(AppModule );