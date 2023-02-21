import { Component, Input } from '@angular/core';
import { Monte } from '../interfaces/montes.interface';
import { MontesService } from '../servicios/montes.service';
// import { MontesService } from '../servicios/montes.service';

@Component({
  selector: 'app-borrar-monte',
  templateUrl: './borrar-monte.component.html'
})
export class BorrarMonteComponent {
  constructor (private montesService: MontesService){}

  posicion = 1;

  @Input('lista-montes') montes: Monte[] = [];

  // get montes() {
  //   return this.montesService.montes;
  // }

  borrar() {
    if (this.montes.length > 0 && this.posicion > 0) {
      this.montesService.borrarMonte(this.posicion);
    }
  }
}
