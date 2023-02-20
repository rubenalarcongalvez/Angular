import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  ruta!: ActivatedRoute;

  constructor(private http: PaisesService) {}

  ngOnInit(): void {
    this.ruta.params.subscribe({
      next: (ID) => {
        this.http.buscarDetallePais(ID['id']);
      },
    });
  }

  get pais() {
    return this.http.detallePais;
  }
}
