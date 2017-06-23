import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './core/auth-guard.service';
import { AnimateComponent } from './animate/animate.component';
import { FormComponent } from './form/form.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'animate',
    component:AnimateComponent
  },
  {
    path: 'form',
    component:FormComponent
  },
  {
    path: 'todo',
    redirectTo: 'todo/ALL',
    canLoad: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
