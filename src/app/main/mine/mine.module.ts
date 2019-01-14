import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MineRoutingModule } from './mine-routing.module';
import { MineComponent } from './mine/mine.component';

import { MenuModule } from '../../../@yunny/components/menu/menu.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { IdeaComponent } from './idea/idea.component'
@NgModule({
  declarations: [MineComponent, AboutUsComponent, IdeaComponent],
  imports: [
    CommonModule,
    MineRoutingModule,
    MenuModule
  ]
})
export class MineModule { }
