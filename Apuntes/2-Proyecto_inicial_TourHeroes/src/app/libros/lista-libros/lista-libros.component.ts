import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styles: [],
})
export class ListaLibrosComponent implements OnInit {
  libros: string[] = [
    '1984',
    'un mundo feliz',
    'Moby Dick',
    'guerra y paz',
    'Los miserables',
  ];

  libroBorrado: string = '';
  libroid!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        this.libroid = params['id'];
        console.log(this.libroid);
      },
    });
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  borrarElemento(): void {
    let numAleatorio = Math.random() * (this.libros.length - 1) + 0;

    this.libroBorrado = this.libros[Math.round(numAleatorio)];

    this.libros.splice(Math.round(numAleatorio), 1) || '';
  }
}
