import { Component } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  // @ViewChild('txtquery') busqueda!:ElementRef<HTMLInputElement>;
  prompt: string = '';
  busqueda: string = '';
  limpio: boolean = true;

  constructor(private service: PaisesService) {
    return JSON.parse(localStorage.getItem('limpio')!) || true;
  }

  buscar() {
    this.busqueda = this.prompt;

    this.service.buscarPorCapital(this.busqueda);

    this.limpio = false;

    localStorage.setItem('limpio', JSON.stringify(this.limpio));

    this.prompt = '';
  }

  limpiar() {
    this.limpio = true;
    localStorage.setItem('limpio', JSON.stringify(this.limpio));
  }

  get paises() {
    return this.service.resultadosCapital;
  }

  get error() {
    if (!this.busqueda) {
      return false;
    } else {
      return this.service.error;
    }
  }
}