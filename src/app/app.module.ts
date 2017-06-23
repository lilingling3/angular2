import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { TodoModule } from './todo/todo.module';
import { LoginModule } from './login/login.module';
// 响应式 表单
import { ReactiveFormsModule } from '@angular/forms';

import { OneDirective } from "./utils/directive/beauty.directive";
import { BeautyDirective } from "./utils/directive/color.directive";
import { BeautyInputDirective } from "./utils/directive/input.directive";
import { MyUnlessDirective } from "./utils/directive/unClass.directive";
import { AppComponent } from './app.component';
import { AnimateComponent } from './animate/animate.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    OneDirective,
    BeautyDirective,
    BeautyInputDirective,
    MyUnlessDirective,
    AnimateComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdlModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    TodoModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
