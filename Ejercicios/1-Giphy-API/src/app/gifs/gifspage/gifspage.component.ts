import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifspage',
  templateUrl: './gifspage.component.html',
  styleUrls: ['./gifspage.component.scss'],
})
export class GifsPageComponent {
  @ViewChild('txtQuery') txtQuery!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  buscar(txtInput: HTMLInputElement) {
    const contenido = txtInput.value;

    this.gifsService.buscarService(contenido);

    txtInput.value = '';
  }

  get resultados() {
    return this.gifsService._resultados;
  }

}
