import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service.js';
import { CreateTodoDto } from '../dto/createTodoDto.js';
import { JwtAuthGuard } from '../auth/jwt-authguard.js';
import { JwtPayload } from '../auth/jwt-payload.js';
import { Request } from 'express';

type AuthenticatiedRequest = Request & {
  user: JwtPayload;
};

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createTodoSto: CreateTodoDto,
    @Req() request: AuthenticatiedRequest,
  ) {
    const email = request.user.email;
    return this.todoService.create(createTodoSto, email);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: AuthenticatiedRequest) {
    const email = request.user.email;

    return this.todoService.findAll(email);
  }
}
