import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListaLibrosComponent
  ],
  exports: [
    ListaLibrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LibrosModule {}
