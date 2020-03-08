import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../services/TodoService.service';
import { Todo } from '../shared/models/Todo';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getAllUsers().subscribe
    (res => this.todos = res);
  }

  deleteuser(id: number) {
    this.todoService.deleteuser(id.toString());
  }
}
