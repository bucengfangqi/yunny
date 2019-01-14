import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

import { RouterModule} from '@angular/router';
import { BackComponent } from './back/back.component';
@NgModule({
  declarations: [MenuComponent, BackComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    BackComponent
  ]
})
export class MenuModule { }
