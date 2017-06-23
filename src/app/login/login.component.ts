import {
  Component,
  Inject,
  trigger,
  state,
  style,
  transition,
  animate,
  OnDestroy
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { MdlDialogService, MdlDialogReference } from 'angular2-mdl';
import { Auth, Image } from '../domain/entities';

// import { BingImageService } from './bing-img.service';
// import { RegisterDialogComponent } from './register-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{

  username = '';
  password = '';
  auth: Auth;

  slides: Image[] = [];
  photo = '/assets/img/login_default_bg.jpg';
  subscription: Subscription;
  loginBtnState: string = 'inactive';

  constructor(
    @Inject('auth') private service,
    @Inject('bing') private bindsService,
    private router: Router
    ) {
      // 从必应中获取图片
      this.bindsService.getImageUrl()
      .subscribe((images:Image[]) => {
        this.slides = [...images];
        console.log('slides:')
        console.log(this.slides);
        // 切换图片
        this.rotateImages(this.slides);
      })
    }
    onSubmit(){
      this.subscription = this.service
        .loginWithCredentials(this.username, this.password)
        .subscribe(auth => {
          this.auth = Object.assign({}, auth);
          if(!auth.hasError){
            this.router.navigate(['todo']);
          }
        });
    }

   rotateImages(arr:Image[]){
     const length = arr.length;//常量
     let i = 0;// 变量
     setInterval(() =>{
       i = (i+1) % length;
       // 设置图片 为返回的路径
       this.photo = this.slides[i].contentUrl;
       console.log(this.photo)
     }, 4000)
   }

    ngOnDestroy(){
      // if(this.subscription !== undefined)
      //   this.subscription.unsubscribe();
   }

}
