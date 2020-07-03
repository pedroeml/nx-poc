import { Todo } from '@nx-poc/api-interfaces';

import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './service/app.service';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get('todos')
  getData(): Todo[] {
    return this.service.getData();
  }

  @Post('addTodo')
  addTodo(): void {
    return this.service.addTodo();
  }
}
