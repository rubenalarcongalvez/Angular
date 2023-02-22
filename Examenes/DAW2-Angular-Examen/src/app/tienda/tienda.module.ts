import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { RegClienteComponent } from './page/reg-cliente/reg-cliente.component';
import { RegProductoComponent } from './page/reg-producto/reg-producto.component';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallesClienteComponent } from './page/detalles-cliente/detalles-cliente.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    RegClienteComponent,
    RegProductoComponent,
    DetallesClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    RegClienteComponent,
    RegProductoComponent
  ],
  providers: [
    DataService
  ]
})
export class TiendaModule { }
