import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { JwtPayload } from './jwt-payload.js';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateAccessToken(userId: string, email: string): Promise<string> {
    const payload: JwtPayload = {
      sub: userId,
      email,
    };

    return this.jwtService.signAsync(payload);
  }

  async verifyAccessToken(token: string): Promise<JwtPayload> {
    return this.jwtService.verifyAsync<JwtPayload>(token);
  }
}
