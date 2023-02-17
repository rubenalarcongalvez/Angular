import { Component } from '@angular/core';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styleUrls: ['./por-continente.component.scss']
})
export class PorContinenteComponent {
  busqueda: string = '';
  limpio: boolean = true;

  constructor(private paisService: PaisService) {
    this.limpio = JSON.parse(localStorage.getItem('limpio')!);
  }

  buscar(txtInput: HTMLInputElement) {
    this.busqueda = txtInput.value;

    this.paisService.buscarContinenteService(this.busqueda);

    localStorage.setItem('limpio', JSON.stringify(false));

    this.limpio = false;

    txtInput.value = '';
  }

  get error(): boolean {
    if (!this.busqueda) {
      return false;
    } else {
      return this.paisService._error;
    }
  }

  get resultados() {
    return this.paisService._resultadosContinente;
  }

  limpiar() {
    this.limpio = true;
    localStorage.setItem('limpio', JSON.stringify(this.limpio));
  }
}
