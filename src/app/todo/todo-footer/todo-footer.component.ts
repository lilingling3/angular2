import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  // 声明 itemCount 需要从父组件中传入
  @Input() itemCount:number;
  constructor() { }

  ngOnInit() {
  }

}
