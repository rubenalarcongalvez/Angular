import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ScopedThemeAppComponent } from './scoped-theme-app/scoped-theme-app.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    title: "Página principal test",
    path: '',
    pathMatch: 'full',
    component: PrincipalComponent
  },
  {
    title: "Scoped CSS",
    path: 'scoped-css',
    component: ScopedThemeAppComponent
  },
  {
    title: "Página principal test",
    path: "**",
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
