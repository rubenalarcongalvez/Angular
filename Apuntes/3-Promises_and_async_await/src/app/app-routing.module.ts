import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PromisesComponent } from './promises/promises.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PromisesComponent
  },
  {
    title: 'Promises',
    path: 'promises',
    component: PromisesComponent
  },
  {
    title: 'Aysnc / await',
    path: 'async-await',
    component: AsyncAwaitComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
