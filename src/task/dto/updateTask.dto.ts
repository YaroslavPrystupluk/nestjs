import {
  IsString,
  IsNotEmpty,
  Length,
  IsBoolean,
  IsOptional,
  IsInt,
  IsPositive,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Поле повино бути рядком' })
  @IsNotEmpty({ message: 'Поле не повинно бути пустим' })
  @Length(3, 50, { message: 'Поле повино містити від 3 до 50 символві' })
  title: string;

  @IsString({ message: 'Поле повино бути рядком' })
  @Length(3, 50, { message: 'Поле повино містити від 3 до 50 символві' })
  @IsOptional()
  description: string;

  @IsBoolean({ message: 'Поле має бути булеву структуру' })
  isCompleted: boolean;

  // @IsNumber({}, { message: 'Поле має бути числом' })
  @IsInt({ message: 'Поле має бути цілим числом числом' })
  @IsPositive({ message: "'Поле має бути цілим додатнім числом" })
  @IsOptional()
  priority: number;
}
