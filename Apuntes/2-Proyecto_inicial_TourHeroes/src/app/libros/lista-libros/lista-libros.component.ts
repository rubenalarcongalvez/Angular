import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styles: [],
})
export class ListaLibrosComponent {
  libros: string[] = [
    '1984',
    'un mundo feliz',
    'Moby Dick',
    'guerra y paz',
    'Los miserables',
  ];

  libroBorrado: string = '';

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  borrarElemento(): void {
    let numAleatorio = Math.random() * (this.libros.length - 1) + 0;

    this.libroBorrado = this.libros[Math.round(numAleatorio)];

    this.libros.splice(Math.round(numAleatorio), 1) || '';
  }
}
