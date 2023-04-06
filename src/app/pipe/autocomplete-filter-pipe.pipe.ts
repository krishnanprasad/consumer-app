import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autocompleteFilterPipe',
})
export class AutocompleteFilterPipePipe implements PipeTransform {
  transform(list: any[], param: string, filtervalue: string): any {
    if (list && filtervalue != '' && param != null) {
      return list.filter((listing: any) =>
        listing[param].toLowerCase().includes(filtervalue.toLowerCase())
      );
    } else {
      return null;
    }
  }
}
