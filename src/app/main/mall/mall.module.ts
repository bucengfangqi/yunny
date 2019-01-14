import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MallRoutingModule } from './mall-routing.module';
import { MallComponent } from './mall/mall.component';

import { MenuModule } from '../../../@yunny/components/menu/menu.module'

@NgModule({
  declarations: [MallComponent],
  imports: [
    CommonModule,
    MallRoutingModule,
    MenuModule
  ]
})
export class MallModule { }
