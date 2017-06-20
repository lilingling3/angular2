import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AuthGuardService } from '../core/auth-guard.service';
export const routes:Routes=[
  // {
  //   path:'todo',
  //   component:TodoComponent
  // },
  // 使用路由参数传递参数
  {
    path:'todo/:filter',
    // 路由守卫 只有登录验证之后才能访问 todo模块
    canActivate:[AuthGuardService],
    component:TodoComponent
  }
];

export const routing = RouterModule.forChild(routes);
