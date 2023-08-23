import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth', //We set the the main path for the children is auth, so the children will be below that
    //Lazy Loading: When someone enters this path, we start loading the children
    //This is a Promise, so when it loads, we show it
    //We can also show something when it isn't loaded yet
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)//.catch(m => m.TestModule)
  },
  {
    //We do the same as above with products
    path: 'products',
    //Lazy Loading
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)//.catch(m => m.TestModule)
  },
  {
    //We do the same as above with users
    path: 'users',
    //Lazy Loading
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)//.catch(m => m.TestModule)
  },
  //If we are going to put different components depending on the route path
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: TestComponent
  // },
  //We can set here to redirect to auth, but I show that it could be whatever with this
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
