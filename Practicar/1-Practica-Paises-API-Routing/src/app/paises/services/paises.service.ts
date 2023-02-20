import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../interfaces/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  resultadosPais: Pais[] = [];
  resultadosContinente: Pais[] = [];
  resultadosCapital: Pais[] = [];
  detallePais!: Pais;
  error: boolean = false;

  constructor(private http: HttpClient) {
    this.resultadosPais =
      JSON.parse(localStorage.getItem('resultadosPais')!) || [];
    this.resultadosContinente =
      JSON.parse(localStorage.getItem('resultadosContinente')!) || [];
    this.resultadosCapital =
      JSON.parse(localStorage.getItem('resultadosCapital')!) || [];
    this.detallePais = JSON.parse(localStorage.getItem('detallePais')!);
  }

  buscarPorPais(txt: string) {
    this.error = false;

    if (!txt.trim()) {
      return;
    }

    this.http
      .get<Pais[]>(`https://restcountries.com/v3.1/name/${txt}`)
      .subscribe({
        next: (resp) => {
          this.resultadosPais = resp;
          localStorage.setItem(
            'resultadosPais',
            JSON.stringify(this.resultadosPais)
          );
        },
        error: (err) => {
          this.error = true;
        },
      });
  }

  buscarPorContinente(txt: string) {
    this.error = false;

    if (!txt.trim()) {
      return;
    }

    this.http
      .get<Pais[]>(`https://restcountries.com/v3.1/region/${txt}`)
      .subscribe({
        next: (resp) => {
          this.resultadosContinente = resp;
          localStorage.setItem(
            'resultadosContinente',
            JSON.stringify(this.resultadosContinente)
          );
        },
        error: (err) => {
          this.error = true;
        },
      });
  }

  buscarPorCapital(txt: string) {
    this.error = false;

    if (!txt.trim()) {
      return;
    }

    this.http
      .get<Pais[]>(`https://restcountries.com/v3.1/capital/${txt}`)
      .subscribe({
        next: (resp) => {
          this.resultadosCapital = resp;
          localStorage.setItem(
            'resultadosCapital',
            JSON.stringify(this.resultadosCapital)
          );
        },
        error: (err) => {
          this.error = true;
        },
      });
  }

  buscarDetallePais(txt: string) {
    if (!txt.trim()) {
      return;
    }

    this.http
      .get<Pais[]>(`https://restcountries.com/v3.1/alpha/${txt}`)
      .subscribe({
        next: (resp) => {
          this.detallePais = resp[0];
          localStorage.setItem('detallePais', JSON.stringify(this.detallePais));
        },
      });
  }
}
