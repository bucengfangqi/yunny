import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargeRoutingModule } from './recharge-routing.module';
import { RechargeComponent } from './recharge/recharge.component';

import { MenuModule } from '../../../@yunny/components/menu/menu.module'
@NgModule({
  declarations: [RechargeComponent],
  imports: [
    CommonModule,
    RechargeRoutingModule,
    MenuModule
  ]
})
export class RechargeModule { }
