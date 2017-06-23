import {
  Component,
  Inject,
  trigger,
  state,
  style,
  transition,
  animate,
  OnInit,
  OnDestroy
} from '@angular/core';
@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations:[
    // 触发 动画
    trigger('signal',[
       state('void',style({
        'transform':'translateY(-100%)'
      })),
      state('go',style({
        'background':'green',
        'height':'100px'
      })),
      state('stop',style({
        'background':'yellow',
        'height':'50px'
      })),
      // 从一个状态 到另外一个 状态 的变化 *=》*
      // void => * 空状态
       transition('* => *', animate('.5s 1s cubic-bezier(.17,.67,.83,.67)')),
    ])
  ]
})
export class AnimateComponent implements OnInit {
  signal:string;

  constructor() { }

  ngOnInit() {
  }

  go(){
    this.signal = 'go'
  }
  stop(){
    this.signal = 'stop'
  }
}
