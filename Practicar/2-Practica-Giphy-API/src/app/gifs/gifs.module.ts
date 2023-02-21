import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../services/gifs.service';
import { GifsComponent } from './gifs.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GifsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GifsComponent
  ],
  providers: [
    GifsService
  ]
})
export class GifsModule { }
