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
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // 定义动画 loginState
   animations: [
    trigger('loginState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        transform: 'scale(1.1)'
      })),
      // 放大过度动画
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class LoginComponent implements OnDestroy{

  username = '';
  password = '';
  auth: Auth;

  slides: Image[] = [];
  photo = '/assets/img/login_default_bg.jpg';
  // 订阅
  subscription: Subscription;
  // 登录状态值 默认是inactive
  loginBtnState: string = 'inactive';

  constructor(
    @Inject('auth') private service,
    @Inject('bing') private bindsService,
    private dialogService: MdlDialogService,
    private router: Router
    ) {
      // 从必应中获取图片
      this.bindsService.getImageUrl()
      .subscribe((images:Image[]) => {
        this.slides = [...images];
        // console.log('slides:')
        // console.log(this.slides);
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
      //  console.log(this.photo)
     }, 4000)
   }
  // 销毁 的时候 不在订阅 消息
    ngOnDestroy(){
      if(this.subscription !== undefined)
        this.subscription.unsubscribe();
   }

   toggleLoginState(state: boolean){
     // 根据传递 的布尔值 设置不同的值
     this.loginBtnState = state ?'active':'inactive'
   }

   register($event: MouseEvent){
     console.log($event)
    let pDialog = this.dialogService.showCustomDialog({
      component: RegisterDialogComponent,
      isModal: true,
      styles: {'width': '350px'},
      clickOutsideToClose: true,
      enterTransitionDuration: 400,
      leaveTransitionDuration: 400
    });
    pDialog.map( (dialogReference: MdlDialogReference) => {
      console.log('dialog visible', dialogReference);
    });

  }

}
