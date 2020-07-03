import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '@nx-poc/api-interfaces';

@Component({
  selector: 'nx-poc-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {

  @Input()
  public todos: Todo[];

  constructor() { }

  ngOnInit(): void { }

}
