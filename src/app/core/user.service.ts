import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { User } from '../domain/entities';

@Injectable()
export class UserService {

  private api_url = 'http://localhost:3000/users';

  constructor(private http: Http) { }
  // 查找用户
  findUser(username: string): Promise<User> {
    // 更加username 进行查找
    const url = `${this.api_url}/?username=${username}`;
    return this.http.get(url)
              .toPromise()
              .then(res => {
                console.log(res)
                let users = res.json() as User[];
                // 判断 users 取第一个  返回users[0] 返回对象
                return (users.length>0)?users[0]:null;
              })
              .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
