import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroudRoutingModule } from './playgroud-routing.module';
import { PlaygroudComponent } from './playgroud.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

@NgModule({
  imports: [
    CommonModule,
    PlaygroudRoutingModule
  ],
  declarations: [PlaygroudComponent, OneComponent, TwoComponent, ThreeComponent]
})
export class PlaygroudModule { }
