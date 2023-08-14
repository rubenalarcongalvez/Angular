import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { ScopedThemeAppComponent } from './scoped-theme-app/scoped-theme-app.component';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    AppComponent,
    ScopedThemeAppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TranslateModule.forRoot(),
    PanelModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
