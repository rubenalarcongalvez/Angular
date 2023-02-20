import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './paises/por-pais/por-pais.component';
import { PorContinenteComponent } from './paises/por-continente/por-continente.component';
import { PorCapitalComponent } from './paises/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/ver-pais/ver-pais.component';
import { InicioComponent } from './paises/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    title: 'Países - Práctica',
    pathMatch: 'full',
  },
  {
    path: 'por-pais',
    component: PorPaisComponent,
    title: 'Países - Por país',
  },
  {
    path: 'por-continente',
    component: PorContinenteComponent,
    title: 'Países - Por continente',
  },
  {
    path: 'por-capital',
    component: PorCapitalComponent,
    title: 'Países - Por capital',
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
    title: 'Ver Pais',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
