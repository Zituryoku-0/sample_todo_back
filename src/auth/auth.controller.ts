import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

interface LoginRequest {
  email: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginRequest) {
    // TODO
    // 後でDBからユーザーを取得する
    const userId = '1';

    const accessToken = await this.authService.generateAccessToken(
      userId,
      body.email,
    );

    return {
      accessToken,
    };
  }
}
