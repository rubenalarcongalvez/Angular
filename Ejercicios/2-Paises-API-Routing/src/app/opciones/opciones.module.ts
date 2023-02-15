import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PaisIdComponent } from './pais-id/pais-id.component';
import { PorContinenteComponent } from './por-continente/por-continente.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PaisIdComponent,
    PorPaisComponent,
    PorCapitalComponent,
    PorContinenteComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    PaisIdComponent,
    PorPaisComponent,
    PorCapitalComponent,
    PorContinenteComponent,
  ],
})
export class OpcionesModule {}
