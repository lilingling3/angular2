import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Auth } from '../domain/entities';

@Injectable()
export class AuthService {

  constructor(private http: Http, @Inject('user') private userService) { }
  // 登录 认证
  loginWithCredentials(username: string, password: string): Promise<Auth> {
    return this.userService
      .findUser(username)
      .then(user => {
        console.log(user);
        let auth = new Auth();
        // 移除userId
        localStorage.removeItem('userId');
        // 判断有没有redirectUrl 访问的地址
        let redirectUrl = (localStorage.getItem('redirectUrl') === null)?
          '/': localStorage.getItem('redirectUrl');

        auth.redirectUrl = redirectUrl;
        // 判断用户是否存在
        if (null === user){
          auth.hasError = true;
          auth.errMsg = 'user not found';
          // 判断 密码是否一致
        } else if (password === user.password) {
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          localStorage.setItem('userId',user.id);
        } else {
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        return auth;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
