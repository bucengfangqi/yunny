import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MallComponent } from './mall/mall.component';

const routes: Routes = [
  { path: '',   redirectTo: '/mall', pathMatch: 'full' },
  { path: '**', component: MallComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MallRoutingModule { }
