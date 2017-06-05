import { Component, OnInit } from '@angular/core';
import { todo } from './todo.model';
import { TodoService } from './todo.service';
import { Router, ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  private todos;
  private desc = '';
  private filter;
  private filterTodos;
  constructor(
    private todoService:TodoService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    //this.getTodos()
    this.activatedRoute.params.subscribe(params =>{
      this.filter = params['filter'];
      this.filterTodos(this.filter);
    })
  }
  onTextChanges(value){
    this.desc = value
  }
  addTodo(){
    // this.todos.push({id:'1', desc:this.desc, completed:false});
   return this.todoService.addTodo(this.desc)
      .then(todo =>{
        // 扩展操作符 增加
        this.todos = [...this.todos,todo];
        this.desc = '';
        console.log(this.todos);
        console.log(todo)
      })
  }


  toggleTodo(todo:todo){
    const index = this.todos.indexOf(todo);
    this.todoService.updateTodo(todo)
      .then(t =>{
        // slice 截取
        this.todos = [...this.todos.slice(0,index),
          t,...this.todos.slice(index+1)]
      })
  }

  removeTodo(todo){
    const i = this.todos.indexOf(todo);
    this.todoService.deleteTodoById(todo.id)
      .then(()=>{
        this.todos = [
          ...this.todos.slice(0,i),
          ...this.todos.slice(i+1)
        ]
      })
  }

  // getTodos(){
  //   this.todoService.getTodos()
  //     .then(todos => this.todos = [...todos])
  // }
  filterTodos(filter:string){
    this.todoService.filterTodos(filter)
      .then(todos => this.todos = [...todos])
  }
}
