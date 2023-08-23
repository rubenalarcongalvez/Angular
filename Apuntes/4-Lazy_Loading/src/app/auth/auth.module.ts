import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule //We must import the routing module we will use (apart of the root one that is in app.module)
  ]
})
export class AuthModule { }
