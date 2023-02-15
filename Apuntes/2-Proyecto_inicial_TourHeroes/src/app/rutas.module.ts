import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContador } from './contador/contador.component';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { MainPageComponent } from './montes/main-page/main-page.component';

const rutas: Routes = [
  {
    path: '',
    component: AppContador,
    pathMatch: 'full',
  },
  {
    path: 'libros',
    component: ListaLibrosComponent,
  },
  {
    path: 'libro/:id',
    component: ListaLibrosComponent,
  },
  {
    path: 'montes',
    component: MainPageComponent,
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
