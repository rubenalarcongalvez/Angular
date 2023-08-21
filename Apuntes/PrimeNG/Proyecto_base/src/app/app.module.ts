import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { ScopedThemeAppComponent } from './scoped-theme-app/scoped-theme-app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    AppComponent,
    ScopedThemeAppComponent,
    PrincipalComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TranslateModule.forRoot(),
    PanelModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
