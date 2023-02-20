import { Component } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  // @ViewChild('txtquery') busqueda!:ElementRef<HTMLInputElement>;
  prompt: string = '';
  busqueda: string = '';
  limpio: boolean = true;

  constructor(private service: PaisesService) {
    this.limpio = JSON.parse(localStorage.getItem('limpio')!);
  }

  buscar() {
    this.busqueda = this.prompt;
    
    this.service.buscarPorPais(this.busqueda);

    localStorage.setItem('limpio', JSON.stringify(false));

    this.limpio = false;

    this.prompt = '';
  }

  limpiar() {
    this.limpio = true;
    localStorage.setItem('limpio', JSON.stringify(this.limpio));
  }

  get paises() {
    return this.service.resultadosPais;
  }

  get error() {
    if (!this.busqueda) {
      return false;
    } else {
      return this.service.error;
    }
  }
}
