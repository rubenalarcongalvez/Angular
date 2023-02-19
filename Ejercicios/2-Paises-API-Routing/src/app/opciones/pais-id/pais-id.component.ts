import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-pais-id',
  templateUrl: './pais-id.component.html',
  styleUrls: ['./pais-id.component.scss'],
})
export class PaisIdComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((ID) => {
      this.paisService.buscarIDService(ID['id']);
    });
  }

  get pais() {
    return this.paisService._paisEspecifico;
  }
}
