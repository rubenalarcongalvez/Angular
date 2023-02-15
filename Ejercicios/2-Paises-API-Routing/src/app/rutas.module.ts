import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './opciones/por-capital/por-capital.component';
import { PorPaisComponent } from './opciones/por-pais/por-pais.component';
import { PorContinenteComponent } from './opciones/por-continente/por-continente.component';
import { PaisIdComponent } from './opciones/pais-id/pais-id.component';
import { NgModule } from '@angular/core';

const rutas: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'pais/:id',
    component: PaisIdComponent,
  },
  {
    path: 'por-continente',
    component: PorContinenteComponent,
  },
  {
    path: 'por-capital',
    component: PorCapitalComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class RutasModule {}
