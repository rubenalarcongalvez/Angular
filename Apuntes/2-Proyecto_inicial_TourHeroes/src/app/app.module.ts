import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContador } from './contador/contador.component';
import { LibrosModule } from './libros/libros.module';
import { MontesModule } from './montes/montes.module';

@NgModule({
  declarations: [
    AppComponent,
    AppContador
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibrosModule,
    MontesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
