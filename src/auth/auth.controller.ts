import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginRequestDto } from '../dto/loginRequestDto.js';
import { LoginResponseDto } from '../dto/loginResponseDto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginRequest: LoginRequestDto) {
    const loginResponse = await this.authService.login(loginRequest);

    const accessToken: LoginResponseDto =
      await this.authService.generateAccessToken(loginResponse);

    return {
      accessToken,
    };
  }
}
