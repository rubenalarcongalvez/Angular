import { Component } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styles: [],
})
export class PorContinenteComponent {
  // @ViewChild('txtquery') busqueda!:ElementRef<HTMLInputElement>;
  prompt: string = '';
  busqueda: string = '';
  limpio: boolean = true;

  constructor(private service: PaisesService) {
    this.limpio = JSON.parse(localStorage.getItem('limpio')!);
  }

  buscar() {
    this.busqueda = this.prompt;

    this.service.buscarPorContinente(this.busqueda);

    this.limpio = false;

    localStorage.setItem('limpio', JSON.stringify(this.limpio));

    this.prompt = '';
  }

  limpiar() {
    this.limpio = true;
    localStorage.setItem('limpio', JSON.stringify(this.limpio));
  }

  get paises() {
    return this.service.resultadosContinente;
  }

  get error() {
    if (!this.busqueda) {
      return false;
    } else {
      return this.service.error;
    }
  }
}
