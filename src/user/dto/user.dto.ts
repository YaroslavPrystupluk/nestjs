import {
  IsString,
  IsNotEmpty,
  Length,
  IsDate,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { StartsWith } from '../../task/decorators/starts-with.decorator.js';
import { Transform } from 'class-transformer';

function parseCustomDate(value: string): Date | null {
  const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
  const match = value.match(regex);

  if (!match) return null;

  const [, day, month, year] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  const isValid =
    date.getFullYear() === Number(year) &&
    date.getMonth() === Number(month) - 1 &&
    date.getDate() === Number(day);

  return isValid ? date : null;
}

export class UserDto {
  @IsString({ message: 'Поле повино бути рядком' })
  @IsNotEmpty({ message: 'Поле не повинно бути пустим' })
  @Length(2, 50, { message: 'Поле повино містити від 3 до 50 символві' })
  firstName: string;

  @IsString({ message: 'Поле повино бути рядком' })
  @IsNotEmpty({ message: 'Поле не повинно бути пустим' })
  @Length(2, 50, { message: 'Поле повино містити від 3 до 50 символві' })
  @IsOptional()
  lastName: string;

  @IsDate({ message: 'Поле має бути коректною датою у форматі ДД.ММ.РРРР' })
  @Transform(({ value }) => parseCustomDate(value))
  @IsNotEmpty({ message: 'Поле не повинно бути пустим' })
  birthday: string;

  @IsBoolean()
  @IsOptional()
  isMarried: boolean;
}
