import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository.js';
import { LoginRequestDto } from '../dto/loginRequestDto.js';
import { User } from './user.entity.js';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByEmail(loginRequest: LoginRequestDto): Promise<User | null> {
    const rows: User[] = await this.userRepository.findByEmail(loginRequest);

    return rows[0] ?? null;
  }
}
