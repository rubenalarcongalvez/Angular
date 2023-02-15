import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RutasModule } from '../rutas.module';
import { AppSidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [AppSidebarComponent],
  imports: [CommonModule, RutasModule],
  exports: [AppSidebarComponent],
})
export class SidebarModule {}
