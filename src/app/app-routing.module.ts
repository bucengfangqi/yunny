import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }  from './authentication/auth.guard';

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ResetComponent } from './authentication/reset/reset.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },{
    path: 'register',
    component: RegisterComponent,
  },{
    path: 'reset',
    component: ResetComponent,
  },{
    path: 'customer-service',
    loadChildren: './main/customer-service/customer-service.module#CustomerServiceModule',
  },{
    path: 'home',
    loadChildren: './main/home/home.module#HomeModule',
    canActivate: [AuthGuard],
  },{
    path: 'mall',
    loadChildren: './main/mall/mall.module#MallModule',
  },{
    path: 'message',
    loadChildren: './main/message/message.module#MessageModule',
    canActivate: [AuthGuard],
  },{
    path: 'mine',
    loadChildren: './main/mine/mine.module#MineModule',
    canActivate: [AuthGuard],
  },{
    path: 'recharge',
    loadChildren: './main/recharge/recharge.module#RechargeModule',
    canActivate: [AuthGuard],
  },

  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
