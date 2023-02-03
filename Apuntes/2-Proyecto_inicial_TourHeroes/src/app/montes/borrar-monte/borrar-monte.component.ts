import { Component } from '@angular/core';
import { MontesService } from '../servicios/montes.service';

@Component({
  selector: 'app-borrar-monte',
  templateUrl: './borrar-monte.component.html'
})
export class BorrarMonteComponent {
  constructor (private montesService: MontesService){}

  posicion = 1;

  get montes() {
    return this.montesService.montes;
  }

  borrar() {
    if (this.montes.length > 0 && this.posicion > 0) {
      this.montesService.borrarMonte(this.posicion);
    }
  }
}
