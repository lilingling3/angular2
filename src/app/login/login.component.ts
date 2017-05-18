import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private text = 'hello';
  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
  }

  onClick(username,password){
     console.log('result   '+ this.authService.loginWithCredentials(username,password));
  }
}
