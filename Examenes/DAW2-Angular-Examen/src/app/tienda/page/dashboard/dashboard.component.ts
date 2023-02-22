import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {

  constructor(private service: DataService) {}

  get clientes() {
    return this.service.clientes;
  }

  get productos() {
    return this.service.productos;
  }

}
