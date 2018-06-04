import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('todoList', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,

        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  addBtnText: string = "Add a Task";
  saveBtnText: string = "Save Your's Task";
  itemDetail: string = "";

  todoItem: string;
  todoList = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.todoList.length;
  }

  addItem () {
    if (this.todoItem) {
      this.todoList.push(this.todoItem);
      this.todoItem = '';
      this.itemCount = this.todoList.length;
    }
    else {
      alert("First Enter Today's Task To Proceed Further!");
    }
  }

  saveItem () {
    if (this.todoList != undefined && this.todoList.length > 0) {

    }
    else {
      alert("First Enter Today's Task To Proceed Further!");
    }
  }

  removeItem(i) {
    this.todoList.splice(i, 1);
    this.itemCount = this.todoList.length;
  }



}
