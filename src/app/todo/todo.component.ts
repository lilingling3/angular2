import { Component, OnInit } from '@angular/core';
import { todo } from './todo.model';
import { TodoService } from './todo.service'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  private todos:todo[]=[];
  private desc = '';
  constructor(
    private todoService:TodoService
  ) { }

  ngOnInit() {
  }

  addTodo(){
    // this.todos.push({id:'1', desc:this.desc, completed:false});
    this.todos = this.todoService.addTodo(this.desc);
    this.desc = '';

  }

}
