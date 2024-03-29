import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  capitalize(value: string): string {
    return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }

  transform(value: string, ...args: unknown[]): unknown {
    let values = value.split(' ');
    let result = ' ';

    for (let v of values) {
      result += this.capitalize(v) + ' ';
    }
    return result;
  }

}
