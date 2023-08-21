import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss'],
})
export class PromisesComponent {
  num1!: any;
  num2!: any;
  result!: any;

  doAsyncStuffWithCallback(number1: number, number2: number, callback: Function) {
    return setTimeout(() => {
      callback(number1, number2);
    }, 2000);
  }

  callbackFunc() {
    this.doAsyncStuffWithCallback(this.num1, this.num2, (a: number, b: number) => {
      this.result = a + b;
    });
  }

  doAsyncStuffWithPromises(number1: number, number2: number) {
    const resultado = number1 + number2;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isNaN(resultado)) {
          resolve(resultado)
        } else {
          reject("You did not put numbers -.-")
        }
      }, 2000);
    })
  }

  promiseFunc() {
    this.doAsyncStuffWithPromises(this.num1, this.num2).then((response) => {
      this.result = response;
    }).catch((error) => {
      this.result = error;
    }).finally(() => {
      //So we clear it after the user sees it
      setTimeout(() => {
        this.num2 = undefined;
        this.num1 = undefined;
        this.result = undefined;
      }, 5000);
    });
  }
}
