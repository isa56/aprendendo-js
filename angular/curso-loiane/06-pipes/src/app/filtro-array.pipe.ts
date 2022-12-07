import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: string[], ...args: any[]): any {
    
    if (value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args.toString().toLowerCase();

    return value.filter(v => v.toLowerCase().indexOf(filter) != -1);
  }

}
