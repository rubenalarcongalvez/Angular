import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  
  constructor(private service: GifsService) {}

  get historial() {
    return this.service.historial;
  }

  buscar(entrada: string) {
    this.service.buscar(entrada);
  }

  get busqueda() {
    return this.service.busqueda;
  }

}
