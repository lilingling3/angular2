import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    @Inject('auth') private authService) { }
  //是否可以进入某个URL
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;
    // 当前 的路由 todo/all
    console.log('state.url'+url);
    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }
  // 是否加载某个URL 对应模块
  canLoad(route: Route): Observable<boolean> {
    let url = `/${route.path}`;
    console.log('route.path'+url)
    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }
}
