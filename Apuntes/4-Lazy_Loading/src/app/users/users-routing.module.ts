import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './pages/new/new.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    //We add what children the route has (in this case, the base route of '' is 'users' in the AppRouting module)
    path: '',
    children: [
      { path: 'new', component: NewComponent },
      { path: 'edit', component: EditComponent },
      { path: 'list', component: ListComponent },
      { path: 'user', component: UserComponent },
      { path: '**', redirectTo: 'list' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
