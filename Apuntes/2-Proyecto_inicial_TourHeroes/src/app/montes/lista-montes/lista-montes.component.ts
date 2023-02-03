import { Component } from '@angular/core';
import { MontesService } from '../servicios/montes.service';

@Component({
  selector: 'app-lista-montes',
  templateUrl: './lista-montes.component.html'
})
export class ListaMontesComponent {

  get montes() {
    return this.montesService.montes;
  }

  constructor (private montesService: MontesService) {}
}
