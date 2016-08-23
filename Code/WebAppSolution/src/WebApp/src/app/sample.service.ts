import {Injectable} from '@angular/core';
@Injectable()
export class SampleService {
    getSampleValue(inputValue: string) {
        return inputValue.length;
    }
}