import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app/app.component.ts';
import {MdButtonModule} from '@angular2-material/button/button';

@NgModule(
    {
        imports: [MdButtonModule, BrowserModule],
        declarations:[AppComponent],
        bootstrap:[AppComponent]
    }
)
export class AppModule { }
