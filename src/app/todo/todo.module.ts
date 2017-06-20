// 没有引入BrowserModule 它会让该模块公开所有组件指令在AppModule 下任何模块中直接使用
// CommonModule 提供常用NgIf NgFor
// 导入 BrowserModule 自动导入 CommonModule
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { routing } from './todo.routes';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    HttpModule,
    // routing
    TodoRoutingModule
  ],
   declarations:[TodoComponent,TodoHeaderComponent,TodoFooterComponent, TodoItemComponent, TodoListComponent],
   providers:[TodoService]
}

)

export  class TodoModule{}
