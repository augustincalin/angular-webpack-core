import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app/app.component.ts';
//import {MaterialModule} from '@angular2-material';

@NgModule(
    {
        imports: [BrowserModule],
        declarations:[AppComponent],
        bootstrap:[AppComponent]
    }
)
export class AppModule { }
