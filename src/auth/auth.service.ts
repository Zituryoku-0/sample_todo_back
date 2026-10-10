import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { JwtPayload } from './jwt-payload.js';
import { LoginRequestDto } from '../dto/loginRequestDto.js';
import { UserService } from '../user/user.service.js';
import { log } from 'console';
import { User } from '../user/user.entity.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async generateAccessToken(loginResponse: User): Promise<string> {
    const payload: JwtPayload = {
      sub: loginResponse.user_id,
      email: loginResponse.email,
    };

    return this.jwtService.signAsync(payload);
  }

  async verifyAccessToken(token: string): Promise<JwtPayload> {
    return this.jwtService.verifyAsync<JwtPayload>(token);
  }

  async login(loginRequest: LoginRequestDto): Promise<User> {
    const user = await this.userService.findByEmail(loginRequest);

    if (!user) {
      throw new UnauthorizedException(
        'メールアドレスまたはパスワードが正しくありません。',
      );
    }

    // TODO パスワードのargon2idを対応する

    return user;
  }
}
