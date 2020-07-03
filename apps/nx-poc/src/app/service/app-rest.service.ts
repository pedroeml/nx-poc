import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { Todo } from '@nx-poc/api-interfaces';

import { Observable } from 'rxjs';

@Injectable()
export class AppRestService {

  constructor(private readonly http: HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');
  }

  public postTodo(): Observable<void> {
    return this.http.post<void>('/api/addTodo', {});
  }
}
