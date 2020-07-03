import { Test, TestingModule } from '@nestjs/testing';

import { Todo } from '@nx-poc/api-interfaces';

import { AppController } from './app.controller';
import { AppService } from './service/app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    const data: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

    it('should return Todos data', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual(data);
    });
  });
});
