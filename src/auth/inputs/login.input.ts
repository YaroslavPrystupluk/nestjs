import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class LoginInput {
  @Field(() => String)
  @IsString({ message: 'Пошта повинно бути рядком' })
  @IsNotEmpty({ message: "Пошта облв'язкова для заповнення" })
  @IsEmail({}, { message: 'Некоректне введене значення електронної пошти' })
  email: string;

  @Field(() => String)
  @IsString({ message: 'Пароль повинен бути рядком' })
  @IsNotEmpty({ message: "Пароль облв'язковий для заповнення" })
  @MinLength(6, { message: 'Пароль повинен бути не меншим ніж 6 символів' })
  @MaxLength(128, {
    message: 'Пароль повинен бути не більшим ніж 128 символів',
  })
  password: string;
}
