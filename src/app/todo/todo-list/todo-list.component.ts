import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from '../../domain/entities';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  _todos:Todo[] = [];
// 子组件 更改影响 父组件  使用 变量
  @Input()
  set todos(val:Todo[]){
    console.log('子组件')
    console.log(val);
    this._todos = [...val];
  }
  get todos(){
    return this._todos
  }

  @Output() onRemoveTodo = new EventEmitter();
  @Output() onToggleTodo = new EventEmitter();
  @Output() onToggleAll = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onToggleTriggered(todo){
    this.onToggleTodo.emit(true)
  }
  onRemoveTriggered(todo){
    this.onRemoveTodo.emit(true)
  }
  onToggleAllTriggered(){
    this.onToggleAll.emit(true)
  }
}
