import {Component} from '@angular/core';
import {SampleService} from './sample.service';

@Component({
    selector: 'my-app',
    template: `<h1>Something!...</h1><button md-raised-button>RAISED{{sampleValue}}</button>`
})
export class AppComponent {
    sampleValue = 0;
    constructor(private sampleService: SampleService){
        this.sampleValue = sampleService.getSampleValue('123');
    }
}