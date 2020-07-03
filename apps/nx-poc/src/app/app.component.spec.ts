import { async, TestBed } from '@angular/core/testing';

import { Todo } from '@nx-poc/api-interfaces';

import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';
import { AppService } from './service/app.service';

describe('AppComponent', () => {
  const data: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: AppService, useClass: class {
          getTodos: () => Observable<Todo[]> = () => of(data);
          addTodo: () => Observable<Todo[]> = () => of(data);
        }}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
