import { Injectable } from "@angular/core";

import { Todo } from '@nx-poc/api-interfaces';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AppRestService } from './app-rest.service';

@Injectable()
export class AppService {
  constructor(private readonly restService: AppRestService) { }

  public getTodos(): Observable<Todo[]> {
    return this.restService.getTodos();
  }

  public addTodo(): Observable<Todo[]> {
    return this.restService.postTodo().pipe(
      switchMap(() => this.getTodos()));
  }
}
