import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../interfaces/tienda';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detalles-cliente',
  templateUrl: './detalles-cliente.component.html',
  styles: [],
})
export class DetallesClienteComponent implements OnInit {

  clie!: Cliente;

  constructor(private service: DataService ,private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.service.buscarCliente(params['nombre']);
      }
    })
  }

  get cliente() {
    return this.service.cliente;
  }
}
