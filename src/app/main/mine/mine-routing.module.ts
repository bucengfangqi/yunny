import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MineComponent } from './mine/mine.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { IdeaComponent } from './idea/idea.component'

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'idea', component: IdeaComponent },
  { path: '',   redirectTo: '/mine', pathMatch: 'full' },
  { path: '**', component: MineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MineRoutingModule { }
