import { Component } from '@angular/core';

import { Todo } from '@nx-poc/api-interfaces';

import { AppService } from './service/app.service';

@Component({
  selector: 'nx-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private readonly service: AppService) {
    this.service.getTodos().subscribe(
      todos => {
        this.todos = todos;
      }
    );
  }

  public addTodo() {
    this.service.addTodo().subscribe(
      todos => {
        this.todos = todos;
      },
    );
  }
}
