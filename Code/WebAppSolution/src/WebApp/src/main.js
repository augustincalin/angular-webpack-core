"use strict";
require('core-js');
require('reflect-metadata');
require('zone.js/dist/zone');
var app_module_1 = require('./app.module');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
