import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqtrValue'
})
export class SqtrValuePipe implements PipeTransform {

  transform(value: string, arg: Number): Number {
       let  newValue = parseInt(value)
          
        newValue =   Math.pow(newValue, 2)

          return newValue;
        }
    }

