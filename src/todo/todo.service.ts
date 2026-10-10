import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from '../dto/createTodoDto.js';
import { TodoRepository } from './todo.repository.js';
import { Todo } from './todo.entity.js';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  create(createTodoDto: CreateTodoDto, email: string): Promise<void> {
    return this.todoRepository.addTodo(createTodoDto, email);
  }

  findAll(email: string): Promise<Todo[]> {
    return this.todoRepository.findTodo(email);
  }
}
