//  playgroud 模块 路由
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PlaygroudComponent } from './playgroud.component';

import { AuthGuardService } from '../core/auth-guard.service';

import { PlaygroudComponent } from './playgroud.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  // {
  //   path: 'todo/:filter',
  //   canActivate: [AuthGuardService],
  //   component: PlaygroudComponent
  // },
  {
    path:'',
    component:PlaygroudComponent,
    children:[
      {
        path:'one',
        component:OneComponent,
        children:[
          {
            path:'three',
            component:ThreeComponent
          }
        ]
      },
      {
        path:'two',
        component:TwoComponent,
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PlaygroudRoutingModule { }
