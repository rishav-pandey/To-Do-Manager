import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  addBtnText: string = "Add a Task";
  saveBtnText: string = "Save Your's Task";

  todoItem: string;
  todoList = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.todoList.length;
  }

  addItem () {
    this.todoList.push(this.todoItem);
    this.todoItem = '';
    this.itemCount = this.todoList.length;
  }

}
