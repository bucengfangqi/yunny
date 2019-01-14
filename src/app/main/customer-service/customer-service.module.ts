import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerServiceRoutingModule } from './customer-service-routing.module';
import { CustomerServiceComponent } from './customer-service/customer-service.component';

import { MenuModule } from '../../../@yunny/components/menu/menu.module'

@NgModule({
  declarations: [CustomerServiceComponent],
  imports: [
    CommonModule,
    CustomerServiceRoutingModule,
    MenuModule
  ]
})
export class CustomerServiceModule { }
