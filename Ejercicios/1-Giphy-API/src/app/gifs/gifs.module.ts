import { GifsPageComponent } from './gifspage/gifspage.component';
import { NgModule } from '@angular/core';
import { GifsComponent } from './gifs.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    declarations: [
      GifsComponent,
      GifsPageComponent,
      SidebarComponent
    ],
    providers: [],
    bootstrap: [],
    imports: [
      CommonModule
    ],
    exports: [
      GifsComponent,
      GifsPageComponent,
      SidebarComponent
    ]
})
export class GifsModule { }
