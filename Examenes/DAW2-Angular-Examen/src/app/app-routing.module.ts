import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './tienda/page/dashboard/dashboard.component';
import { DetallesClienteComponent } from './tienda/page/detalles-cliente/detalles-cliente.component';
import { RegClienteComponent } from './tienda/page/reg-cliente/reg-cliente.component';
import { RegProductoComponent } from './tienda/page/reg-producto/reg-producto.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'nuevocliente',
    component: RegClienteComponent,
  },
  {
    path: 'nuevoproducto',
    component: RegProductoComponent,
  },
  {
    path: 'cliente/:nombre',
    component: DetallesClienteComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
