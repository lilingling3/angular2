import { Injectable } from '@angular/core';
import {todo} from './todo.model';
import { UUID } from 'angular2-uuid';
@Injectable()
export class TodoService {
  todos:todo[]=[];

  constructor() { }

  addTodo(todoItem:string){

    let todo = {
      id:UUID.UUID(),
      desc:todoItem,
      completed:false
    };

    this.todos.push(todo);
    return this.todos;
  }

}
