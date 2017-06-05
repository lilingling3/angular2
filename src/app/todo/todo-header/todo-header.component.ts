import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  // 事件变量
  inputValue:string;
  // 输入型变量
  @Input() placeholder:string = 'what needs to be done?';
  @Input() delay:number = 300;
  // 输出变量 事件发射器
  @Output() textChanges = new EventEmitter<string>();

  @Output() onEnterUp = new EventEmitter<boolean>();

  constructor(
    private elementRef:ElementRef
  ) {
    // Obserable rx 直接操作DOM

    const event = Observable.fromEvent(elementRef.nativeElement,'keyup')
      .map(()=>this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();

    // 适当的时候发射出去
    event.subscribe(input => this.textChanges.emit(input))
  }

  ngOnInit() {}

  enterUp(){
    this.onEnterUp.emit(true);
    this.inputValue = ''
  }

}
