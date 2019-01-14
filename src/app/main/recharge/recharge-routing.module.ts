import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechargeComponent } from './recharge/recharge.component';

const routes: Routes = [
  { path: '',   redirectTo: '/recharge', pathMatch: 'full' },
  { path: '**', component: RechargeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechargeRoutingModule { }
