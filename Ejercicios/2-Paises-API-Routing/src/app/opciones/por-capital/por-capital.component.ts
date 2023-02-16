import { Component } from '@angular/core';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss'],
})
export class PorCapitalComponent {
  busqueda: string = '';
  limpio: boolean = true;

  constructor(private paisService: PaisService) {
    this.limpio = JSON.parse(localStorage.getItem('limpio')!);
  }

  buscar(txtInput: HTMLInputElement) {
    this.busqueda = txtInput.value;

    this.paisService.buscarCapitalService(this.busqueda);

    localStorage.setItem('limpio', JSON.stringify(false));

    this.limpio = false;

    txtInput.value = '';
  }

  get error(): boolean {
    return this.paisService._error;
  }

  get resultados() {
    return this.paisService._resultadosCapital;
  }

  limpiar() {
    this.limpio = true;
    localStorage.setItem('limpio', JSON.stringify(this.limpio));
  }
}
