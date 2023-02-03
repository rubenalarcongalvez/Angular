import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class AppContador {
  title = 'Contador';

  contador: number;
  base: number = 5;

  constructor() {
    this.contador = JSON.parse(localStorage.getItem('contador')!) || 0;
  }

  restar1(): void {
    this.contador -= 1;
    localStorage.setItem('contador', JSON.stringify(this.contador));
  }

  sumar1(): void {
    this.contador += 1;
    localStorage.setItem('contador', JSON.stringify(this.contador));
  }

  cambiarContador(cantidad: number): void {
    this.contador += cantidad;
    localStorage.setItem('contador', JSON.stringify(this.contador));
  }

  restablecerContador():void {
    this.contador = 0;
    localStorage.setItem('contador', JSON.stringify(this.contador));
  }
}
