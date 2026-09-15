import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginRequest {
  @ApiProperty({
    name: 'Пошта користувача',
    description: 'Введіть пошту користувача',
    example: 'Jon@example.com',
  })
  @IsString({ message: 'Пошта повинно бути рядком' })
  @IsNotEmpty({ message: "Пошта облв'язкова для заповнення" })
  @IsEmail({}, { message: 'Некоректне введене значення електронної пошти' })
  email: string;

  @ApiProperty({
    name: 'Пароль користувача',
    description: 'Введіть пароль користувача',
    example: '123456',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: 'Пароль повинен бути рядком' })
  @IsNotEmpty({ message: "Пароль облв'язковий для заповнення" })
  @MinLength(6, { message: 'Пароль повинен бути не меншим ніж 6 символів' })
  @MaxLength(128, {
    message: 'Пароль повинен бути не більшим ніж 128 символів',
  })
  password: string;
}
