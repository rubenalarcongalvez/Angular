import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {}

  buscar(txt:string) {
    const contenido = txt;

    this.gifsService.buscarService(contenido);
  }

  get historial() {
    return this.gifsService.historial;
  }

}
