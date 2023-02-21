import { Component, EventEmitter, Output } from '@angular/core';
import { Monte } from '../interfaces/montes.interface';
import { MontesService } from '../servicios/montes.service';

@Component({
  selector: 'app-agregar-monte',
  templateUrl: './agregar-monte.component.html',
})
export class AgregarMonteComponent {
  @Output('nuevo-monte') onNuevoMonte: EventEmitter<Monte> = new EventEmitter();

  nuevo: Monte = {
    nombre: '',
    altura: 0,
  };

  // constructor (private montesService: MontesService) {}

  agregar() {
    if (!this.nuevo.nombre.trim() || this.nuevo.altura <= 0) {
      return;
    }

    this.onNuevoMonte.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      altura: 0,
    };
  }
}
