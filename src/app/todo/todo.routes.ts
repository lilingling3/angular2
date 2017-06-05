import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
export const routes:Routes=[
  {
    path:'todo',
    component:TodoComponent
  },
  // 使用路由参数传递参数
  {
    path:'todo/:filter',
    component:TodoComponent
  }
];

export const routing = RouterModule.forChild(routes);
