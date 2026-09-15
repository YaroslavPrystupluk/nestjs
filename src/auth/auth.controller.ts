import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisteRequest } from './dto/register.dto.js';
import { LoginRequest } from './dto/login.dto.js';
import type { Request, Response } from 'express';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthResponse } from './dto/auth.dto.js';
import { AuthGuard } from '@nestjs/passport';
import { Authorization } from './decorators/authoruzation.decorator.js';
import { Authorized } from './decorators/authorized.decorator.js';
import type { User } from '../generated/prisma/client.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Створення нового аккаунта',
    description: 'Створює новий аккаунт для користувача',
  })
  @ApiOkResponse({ type: AuthResponse })
  @ApiBadRequestResponse({ description: 'Некоректні вхідні дані' })
  @ApiConflictResponse({
    description: 'Користувач з такою електронною поштою вже зареєстрований',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  register(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: RegisteRequest,
  ) {
    return this.authService.register(res, dto);
  }

  @ApiOperation({
    summary: 'Логінить користувача',
    description: 'Дозволяє зайти юзеру на свій аккаунт',
  })
  @ApiOkResponse({ type: AuthResponse })
  @ApiBadRequestResponse({ description: 'Некоректні вхідні дані' })
  @ApiNotFoundResponse({ description: 'Корстувача не знайдено' })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Res({ passthrough: true }) res: Response, @Body() dto: LoginRequest) {
    return this.authService.login(res, dto);
  }

  @ApiOperation({
    summary: 'Розлогінить користувача',
    description: 'Дозволяє вийти юзеру зі свого аккаунта',
  })
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    return this.authService.logout(res);
  }

  @ApiOperation({
    summary: 'Рефрешить токен',
    description:
      'Оновлює токен користувача при закінченні терміну дії access токена',
  })
  @ApiOkResponse({ type: AuthResponse })
  @ApiUnauthorizedResponse({ description: 'Ви не авторизовані' })
  @ApiNotFoundResponse({ description: 'Корстувача не знайдено' })
  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  refresh(@Res({ passthrough: true }) res: Response, @Req() req: Request) {
    return this.authService.refresh(res, req);
  }

  @Authorization()
  @Get('@me')
  @HttpCode(HttpStatus.OK)
  //якщо треба якесь поле з юзера то @Authorized("id") id: string
  async getMe(@Authorized() user: User) {
    return user;
  }
}
