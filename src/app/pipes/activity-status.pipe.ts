import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityStatus'
})
export class ActivityStatusPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if (value === true) {
      return 'Complete';
    } else {
      return 'Pending';
    }
  }

}
