import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    //如果用户已经登陆，放行
    // 使用本地存储的方式判断是否登录 有问题
    if (localStorage.getItem('userId') !== null) { return true; }
    // 存储访问的url 到本地
    // Store the attempted URL for redirecting
    localStorage.setItem('redirectUrl', url);
    // 导航到登陆页面
    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}