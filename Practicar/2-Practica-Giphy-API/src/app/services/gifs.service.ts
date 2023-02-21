import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datum, Gif } from '../interfaces/gif';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  historial: string[] = [];
  resultados: Datum[] = [];
  busqueda: string = '';

  constructor(private http: HttpClient) {
    this.historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    this.busqueda = JSON.parse(localStorage.getItem('busqueda')!) || '';
  }

  buscar(busqueda: string) {
    if (!busqueda.trim()) {
      return;
    }

    this.busqueda = busqueda;
    localStorage.setItem('busqueda', JSON.stringify(this.busqueda));

    this.http
      .get<Gif>(
        'https://api.giphy.com/v1/gifs/search?api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&q=' +
          busqueda +
          '&limit=20'
      )
      .subscribe({
        next: (resp) => {
          this.resultados = resp.data;
          localStorage.setItem('resultados', JSON.stringify(this.resultados));

          if (!this.historial.includes(busqueda.trim()) && resp.data[0]) {
            this.historial.unshift(busqueda);
            this.historial = this.historial.splice(0, 10);
            localStorage.setItem('historial', JSON.stringify(this.historial));
          }
        }
      });
  }

  limpiar() {
    this.resultados = [];
    localStorage.setItem('resultados', JSON.stringify(this.resultados));
    this.busqueda = '[]';
    localStorage.setItem('busqueda', JSON.stringify(this.busqueda));
  }
}
