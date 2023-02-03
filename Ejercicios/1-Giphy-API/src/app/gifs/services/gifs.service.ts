import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, Gifresponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  public _resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this._resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarService(txt: string) {
    if (!txt.trim()) {
      return;
    }

    if (!this._historial.includes(txt)) {
      this._historial.unshift(txt);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http
      .get<Gifresponse>(
        'https://api.giphy.com/v1/gifs/search?api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&q=' +
          txt +
          '&limit=20'
      )
      .subscribe({
        next: (resp) => {
          this._resultados = resp.data;
          localStorage.setItem('resultados', JSON.stringify(this._resultados));
        },
      });
  }

  get historial(): string[] {
    return [...this._historial];
  }
}
