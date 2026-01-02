import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
     name: 'upperCase'
})

export class UpperCasePipe implements PipeTransform {
     transform(value: any,): any {
          return value.toUpperCase();
     }
}