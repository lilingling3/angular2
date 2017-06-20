import { Injectable } from '@angular/core';

import { UUID } from 'angular2-uuid';

import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo,Auth } from '../domain/entities';
@Injectable()
export class TodoService {
  //private api_url = 'api/todos';
  private api_url = 'http://localhost:3000/todos';
  //private headers = new Headers({'content-type':'application/x-www-form-urlencoded'});
  private headers = new Headers({'content-type':'application/json'});
  constructor(
    private http:Http
  ) { }

  // post 请求 add
  addTodo(desc:string){
    const userId:number = + localStorage.getItem('userId');
    let todo = {
      id:UUID.UUID(),
      desc:desc,
      completed:false,
      userId
    };

    //this.todos.push(todo);
    //return this.todos;

    return this.http.post(this.api_url, JSON.stringify(todo),{headers:this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(error => console.log(error))
  }

  // put 请求 更改
  updateTodo(todo:Todo){
    const url = `${this.api_url}/${todo.id}`;
    let updateTodo = Object.assign({},todo,{completed:!todo.completed});
    console.log(updateTodo);
    return this.http.put(url,JSON.stringify(updateTodo),{headers:this.headers})
      .toPromise()
      .then(() => updateTodo)
      .catch(error => console.log(error))
  }
  // rest 风格使用 patch请求 只提交 更改部分
  toggleTodo(todo: Todo) {
    const url = `${this.api_url}/${todo.id}`;
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
      .patch(url, JSON.stringify({completed: !todo.completed}), {headers: this.headers})
      .toPromise()
      .then(() => updatedTodo)
      .catch(this.handleError);
  }
  // get 请求 查询
  // getTodos(){
  //   return this.http.get(this.api_url)
  //     .toPromise()
  //     .then(res => {
  //       console.log('getTodos');
  //       console.log(res);
  //       return res.json()})
  //     .catch(error => console.log(error))
  // }
    getTodos(): Promise<Todo[]>{
      const userId:number = + localStorage.getItem('userId');
      return this.http.get(`${this.api_url}?userId=${userId}`)
              .toPromise()
              .then(res => res.json() as Todo[])
    }

  // delete 删除
  deleteTodoById(id:string){
    const url= `${this.api_url}/${id}`;

    return this.http.delete(url,{headers:this.headers})
      .toPromise()
      .then(()=>null)
      .catch(error => console.log(error))
  }

 filterTodos(filter: string): Promise<Todo[]> {
    const userId:number = + localStorage.getItem('userId');
    const url = `${this.api_url}?userId=${userId}`;

    switch(filter){

      case 'ACTIVE': return this.http
                        .get(`${url}&completed=false`)
                        .toPromise()
                        .then(res => res.json() as Todo[])
                        .catch(this.handleError);
      case 'COMPLETED': return this.http
                          .get(`${url}&completed=true`)
                          .toPromise()
                          .then(res => res.json() as Todo[])
                          .catch(this.handleError);
      default:
        return this.getTodos();
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
