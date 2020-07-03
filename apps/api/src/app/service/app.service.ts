import { Injectable } from '@nestjs/common';

import { Todo } from '@nx-poc/api-interfaces';

@Injectable()
export class AppService {
  private todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  public getData(): Todo[] {
    return this.todos;
  }

  public addTodo(): void {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
