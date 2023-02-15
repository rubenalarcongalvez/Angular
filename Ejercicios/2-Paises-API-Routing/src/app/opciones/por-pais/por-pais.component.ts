import { Component } from '@angular/core';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent {
  busqueda: string = '';
  limpio: boolean = true;

  constructor(private paisService: PaisService) {
    this.limpio = JSON.parse(localStorage.getItem('limpio')!);
  }

  buscar(txtInput: HTMLInputElement) {
    this.busqueda = txtInput.value;

    this.paisService.buscarPaisService(this.busqueda);

    localStorage.setItem('limpio', JSON.stringify(false));

    this.limpio = false;

    txtInput.value = '';
  }

  get error(): boolean {
    return this.paisService._error;
  }

  get resultados() {
    return this.paisService._resultadosPais;
  }

  limpiar() {
    this.limpio = true;
    localStorage.setItem('limpio', JSON.stringify(this.limpio));
  }
}
