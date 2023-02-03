import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

@NgModule({
  declarations: [
    ListaLibrosComponent
  ],
  exports: [
    ListaLibrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LibrosModule {}
