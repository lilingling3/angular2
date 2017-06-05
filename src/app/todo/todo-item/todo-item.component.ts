import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() isChecked:boolean = false;
  @Input() todoDesc:string = '';
  @Output() onToggleTriggered = new EventEmitter();
  @Output() onRemoveTriggered = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.onToggleTriggered.emit(true)
  }
  remove(){
    this.onRemoveTriggered.emit(true)
  }

}
