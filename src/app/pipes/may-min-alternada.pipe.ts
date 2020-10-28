import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayMinAlternada',
  pure: true
})
export class MayMinAlternadaPipe implements PipeTransform {

  transform(value: string, arg: string): string {
    let newValue = "";
    let j = 0;

    for (let i = 0; i < value.length; i++) {
      if (j %2 == 0) {
        newValue += value[i].toUpperCase();
      }else{
        newValue += value[i].toLowerCase();
      }
      if (value[i] != " "){
        j +=1;
      }
    }
    return newValue;
  }
  
}
