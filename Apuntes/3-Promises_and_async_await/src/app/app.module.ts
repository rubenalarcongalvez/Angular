import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedButtonsComponent } from './shared-buttons/shared-buttons.component';
import { PromisesComponent } from './promises/promises.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SharedButtonsComponent,
    PromisesComponent,
    AsyncAwaitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
