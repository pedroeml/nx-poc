import { Test } from '@nestjs/testing';

import { Todo } from '@nx-poc/api-interfaces';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    const data: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

    it('should return Todos data', () => {
      expect(service.getData()).toEqual(data);
    });
  });
});
