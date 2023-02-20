import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorContinenteComponent } from './por-continente/por-continente.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaisesService } from './services/paises.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorContinenteComponent,
    PorPaisComponent,
    VerPaisComponent,
    InicioComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  exports: [
    PorCapitalComponent,
    PorContinenteComponent,
    PorPaisComponent,
    VerPaisComponent,
  ],
  providers: [PaisesService],
})
export class PaisesModule {}
