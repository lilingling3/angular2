// 路由模块化
import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todo',
    redirectTo: 'todo/ALL'
  },
  // 添加 惰性 路由
  {
    path: 'playgroud',
    // 模块路径#模块名称
    loadChildren:'app/playgroud/playgroud.module#PlaygroudModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
