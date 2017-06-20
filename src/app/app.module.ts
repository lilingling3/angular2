import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TodoModule } from './todo/todo.module';
// 引入 第三方 样式库
import { MdlModule} from 'angular2-mdl';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryTodoService } from './todo/todo-data';
import { CoreModule } from './core/core.module';
// import { routing } from './app.routes'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// import { AuthService } from './core/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    //InMemoryWebApiModule.forRoot(InMemoryTodoService),
    // routing,
    AppRoutingModule,
    TodoModule,
    MdlModule
  ],
  // providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
