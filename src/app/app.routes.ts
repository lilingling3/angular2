import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { TodoComponent } from './todo/todo.component';
import { ModuleWithProviders } from '@angular/core';
export const routes:Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'todo',
    redirectTo:'todo/All'
    //loadChildren: './todo/todoModule#TodoModule'
  }
];
export const routing : ModuleWithProviders = RouterModule.forRoot(routes) ;
