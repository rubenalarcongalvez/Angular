import { Component } from '@angular/core';
import { Monte } from '../interfaces/montes.interface';
import { MontesService } from '../servicios/montes.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [],
})

export class MainPageComponent {

  montes: Monte[] = [];

  constructor (private MontesService: MontesService) {}

  agregarNuevoMonte(monte: Monte) {
    this.montes.push(monte);
  }
}

