import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: '',
    //We add what children the route has (in this case, the base route of '' is 'products' in the AppRouting module)
    children: [
      { path: 'add', component: AddComponent },
      { path: 'edit', component: EditComponent },
      { path: 'list', component: ListComponent },
      { path: 'product', component: ProductComponent },
      { path: '**', redirectTo: 'list' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
