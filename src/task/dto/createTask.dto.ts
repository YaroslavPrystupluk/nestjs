import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { StartsWith } from '../decorators/starts-with.decorator.js';

export enum TASK_TAGS {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString({ message: 'Поле повино бути рядком' })
  @IsNotEmpty({ message: 'Поле не повинно бути пустим' })
  @StartsWith('Task:', { message: "Назва повина починатися з 'Task:'" })
  @Length(3, 50, { message: 'Поле повино містити від 3 до 50 символві' })
  title: string;

  @IsString({ message: 'Поле повино бути рядком' })
  @Length(3, 50, { message: 'Поле повино містити від 3 до 50 символві' })
  @IsOptional()
  description: string;

  // @IsNumber({}, { message: 'Поле має бути числом' })
  @IsInt({ message: 'Поле має бути цілим числом числом' })
  @IsPositive({ message: "'Поле має бути цілим додатнім числом" })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Поле має бути масивом рядків' })
  // @IsString({each: true, message: "Кожний тег мвє бут рядком"})
  @IsEnum({ each: true, message: 'Недопустиме значення тега' })
  @IsOptional()
  tags: TASK_TAGS[];

  @IsString({ message: 'Поле повино бути рядком' })
  @MinLength(6, { message: 'Пароль має мати мінімум 6 символів' })
  @Matches(/^(?=.*[A-Z])(?=.*[0-9]).$/, {
    message: 'Пароль має мати одну велику літеру і одну цифру',
  })
  password: string;

  @IsString({ message: 'Поле повино бути рядком' })
  @IsUrl(
    { protocols: ['https'], host_blacklist: ['https://example.com'] },
    { message: 'Некоректний формат url' },
  )
  websiteurl: string;

  @IsUUID('4', { message: 'Некоректний формат UUID' })
  userId: number;

  @IsPhoneNumber('UA', { message: 'Некоректний формат телефону' })
  phone: string;
}
