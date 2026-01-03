import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
     name: 'upperCase'
})

@Injectable({
     providedIn:'root'
})

export class UpperCasePipe implements PipeTransform {
     transform(value: any,): any {
          return value.toUpperCase();
     }
}