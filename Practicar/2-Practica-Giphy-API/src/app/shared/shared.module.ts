import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../services/gifs.service';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ],
  providers: [
    GifsService
  ]
})
export class SharedModule { }
