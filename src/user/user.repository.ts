import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity.js';
import { Repository } from 'typeorm';
import { LoginRequestDto } from '../dto/loginRequestDto.js';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async findByEmail(loginRequest: LoginRequestDto): Promise<User[]> {
    return this.repository.query(
      `
        SELECT 
            user_id,
            email,
            password_hash
        FROM user_info
        WHERE email = $1
        AND password_hash = $2
        `,
      [loginRequest.email, loginRequest.password],
    );
  }
}
