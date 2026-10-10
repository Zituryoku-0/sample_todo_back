import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginRequestDto } from '../dto/loginRequestDto.js';
import { Todo } from './todo.entity.js';
import { CreateTodoDto } from '../dto/createTodoDto.js';

@Injectable()
export class TodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>,
  ) {}

  async findTodo(userId: string): Promise<Todo[]> {
    return this.repository.query(
      `
        SELECT 
            id,
            title,
            completed
        FROM todo_info
        WHERE email = $1
        `,
      [userId],
    );
  }

  async addTodo(createTodoDto: CreateTodoDto, email: string): Promise<void> {
    return this.repository.query(
      `INSERT INTO todo_info (email, title, completed)
      VALUES ($1, $2, false)
      RETURNING id`,
      [email, createTodoDto.title],
    );
  }
}
