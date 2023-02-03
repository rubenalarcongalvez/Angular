import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { ListaMontesComponent } from './lista-montes/lista-montes.component';
import { AgregarMonteComponent } from './agregar-monte/agregar-monte.component';
import { BorrarMonteComponent } from './borrar-monte/borrar-monte.component';
import { MontesService } from './servicios/montes.service';



@NgModule({
  declarations: [
    MainPageComponent,
    ListaMontesComponent,
    AgregarMonteComponent,
    BorrarMonteComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    MontesService
  ]
})
export class MontesModule { }
