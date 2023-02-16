import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  public _resultadosPais: Pais[] = [];
  public _resultadosContinente: Pais[] = [];
  public _resultadosCapital: Pais[] = [];
  public _paisEspecifico: Pais[] = [];
  public _error: boolean = false;

  constructor(private http: HttpClient) {
    this._resultadosPais =
      JSON.parse(localStorage.getItem('resultados')!) || [];
    this._resultadosContinente =
      JSON.parse(localStorage.getItem('resultados')!) || [];
    this._resultadosCapital =
      JSON.parse(localStorage.getItem('resultados')!) || [];
    this._paisEspecifico =
      JSON.parse(localStorage.getItem('paisEspecifico')!) || [];
  }

  buscarPaisService(txt: string) {
    this._error = false;

    if (!txt.trim()) {
      return;
    }

    this.http
      .get<Pais[]>('https://restcountries.com/v3.1/name/' + txt)
      .subscribe({
        next: (resp) => {
          this._resultadosPais = resp;
          localStorage.setItem(
            'resultados',
            JSON.stringify(this._resultadosPais)
          );
        },
        error: (err) => {
          this._error = true;
        },
      });
  }

  buscarContinenteService(txt: string) {
    this._error = false;

    if (!txt.trim()) {
      return;
    }

    this.http
      .get<Pais[]>('https://restcountries.com/v3.1/region/' + txt)
      .subscribe({
        next: (resp) => {
          this._resultadosContinente = resp;
          localStorage.setItem(
            'resultados',
            JSON.stringify(this._resultadosContinente)
          );
        },
        error: (err) => {
          this._error = true;
        },
      });
  }

  buscarCapitalService(txt: string) {
    this._error = false;

    if (!txt.trim()) {
      return;
    }

    this.http
      .get<Pais[]>('https://restcountries.com/v3.1/capital/' + txt)
      .subscribe({
        next: (resp) => {
          this._resultadosCapital = resp;
          localStorage.setItem(
            'resultados',
            JSON.stringify(this._resultadosCapital)
          );
        },
        error: (err) => {
          this._error = true;
        },
      });
  }

  buscarIDService(txt: string) {
    this.http
      .get<Pais[]>('https://restcountries.com/v3.1/alpha/' + txt)
      .subscribe({
        next: (resp) => {
          this._paisEspecifico = resp;
          localStorage.setItem(
            'paisEspecifico',
            JSON.stringify(this._paisEspecifico)
          );
        },
      });
  }
}
