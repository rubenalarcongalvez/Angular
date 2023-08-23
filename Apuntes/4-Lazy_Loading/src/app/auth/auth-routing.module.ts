import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

//These are secondary routes inside the main AppRouting (we called it AuthRouting)
const routes: Routes = [
  {
    path: '', //In this case, it should be the route which we put in AppRouting module. In this case is equivalent to: 'auth'
    //A path could have sub-paths (children). 
    children: [
      { path: 'forgot', component: ForgotComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', redirectTo: 'login' } //Default route
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    //We must import the father router module, in this case, AppRouting
    //As we are on its child, we put forChild, if we were in the root Router, we shall put forRoot
    RouterModule.forChild( routes )
  ]
})
export class AuthRoutingModule { }
