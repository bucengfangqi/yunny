import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerServiceComponent } from './customer-service/customer-service.component';

const routes: Routes = [
  { path: '',   redirectTo: '/customer-service', pathMatch: 'full' },
  { path: '**', component: CustomerServiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerServiceRoutingModule { }
