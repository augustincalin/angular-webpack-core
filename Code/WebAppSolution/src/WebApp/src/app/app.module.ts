import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SampleService} from './sample.service.ts';
import {AppComponent} from './app.component.ts';
import {MdButtonModule} from '@angular2-material/button/button';


@NgModule(
    {
        imports: [MdButtonModule, BrowserModule],
        declarations:[AppComponent],
        providers:[SampleService],
        bootstrap:[AppComponent]
    }
)
export class AppModule { }
