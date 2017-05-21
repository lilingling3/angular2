import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private text = 'hello';
  private username:string;
  private password:string;

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.username = '请输入用户名';
    this.password = '请输入密码';
  }

  // onClick(){
  //    console.log('result   '+ this.authService.loginWithCredentials(this.username,this.password));
  // }

  usernameFocus(){
    this.username = ''
  }
  passwordFocus(){
    this.password = ''
  }
  onSubmit(value){
    console.log(this.authService.loginWithCredentials(value.login.username,value.login.password));
  }
}
