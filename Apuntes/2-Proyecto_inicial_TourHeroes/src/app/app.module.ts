import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContador } from './contador/contador.component';
import { LibrosModule } from './libros/libros.module';
import { MontesModule } from './montes/montes.module';
import { ApprutasComponent } from './apprutas/apprutas.component';
import { RouterModule } from '@angular/router';
import { RutasModule } from './rutas.module';
import { FormreactivosComponent } from './formreactivos/formreactivos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppContador,
    ApprutasComponent,
    FormreactivosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LibrosModule,
    MontesModule,
    RutasModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
