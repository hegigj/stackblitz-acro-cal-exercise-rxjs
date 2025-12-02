import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
})
export class ReducePipe implements PipeTransform {

  transform<MODEL>(list: MODEL[], key: keyof MODEL): number {
    return list.reduce(
      (total, item) => {
        const value = item[key];

        if (typeof value === 'number') {
          return total + value;
        }

        return total;
      },
      0
    );
  }

}
