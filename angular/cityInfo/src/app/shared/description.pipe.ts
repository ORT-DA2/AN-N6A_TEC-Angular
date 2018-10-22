import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, maxLength = 20): string {
    if (value) {
      return value.length > maxLength ? `${value.slice(0, maxLength - 1)}...` : value;
    }

    return 'No Description Available';
  }

}
