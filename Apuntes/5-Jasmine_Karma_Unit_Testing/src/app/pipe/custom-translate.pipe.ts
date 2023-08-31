import { Pipe, PipeTransform } from '@angular/core';
import * as en from '../../assets/translate/en.json';

@Pipe({
  name: 'customTranslate'
})
export class CustomTranslatePipe implements PipeTransform {

  transform(value: string): unknown {
    try {
      //STEP_1
      const data: any = (en as any);
      return data[value];
    } catch (err) {
      return null;
    }
  }

}
