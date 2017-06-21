import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './domain/entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  birthday =  new Date();
  numb =  0.124;
  auth: Auth;
  title = 'Awesome Todos';
  constructor(@Inject('auth') private service, private router: Router){
  }
  ngOnInit() {
    this.service
      .getAuth()
      .subscribe(auth => {
        console.log('app')
        console.log(auth)
        this.auth = Object.assign({}, auth);});
  }
  login() {
    this.router.navigate(['login']);
  }
  logout(){
    this.service.unAuth();
    this.auth = null;
    this.router.navigate(['login']);
  }
}
