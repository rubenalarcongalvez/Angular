import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styles: [
  ]
})
export class GifsComponent {
  // @ViewChild('busqueda') busqueda!: ElementRef<HTMLInputElement>;
  busqueda: string = '';
  
  constructor(private service: GifsService) {}

  get gifs() {
    return this.service.resultados;
  }

  // buscar(busqueda: HTMLInputElement) {
    buscar(busqueda: string) {
    this.service.buscar(busqueda);

    // this.busqueda.nativeElement.value = '';
    this.busqueda = '';
  }

  limpiar() {
    this.service.limpiar();
  }

}