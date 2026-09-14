import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

enum Genre {
  ACTION = 'action',
  COMEDY = 'comedy',
  DRAMA = 'drama',
  HORROR = 'horror',
}
export class CreateMovieRequest {
  @ApiProperty({
    description: 'Назва фільма',
    example: 'Top Gun',
    type: String,
  })
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Рік релізу',
    example: 1999,
    type: Number,
  })
  @IsInt()
  releaseYear: number;

  @ApiPropertyOptional({
    description: 'Рейтинг фільму',
    example: 5.4,
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10)
  rating?: number;

  @ApiPropertyOptional({
    description: 'Чи опубліковано фільму',
    example: false,
    type: Boolean,
  })
  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @ApiPropertyOptional({
    description: 'Жанр фільму',
    enum: Genre,
    enumName: 'Genre',
    example: Genre.DRAMA,
  })
  @IsOptional()
  @IsEnum(Genre)
  genre?: Genre;

  @ApiPropertyOptional({
    description: 'Постер до фільму',
    example: 'http://example.storag.com',
    type: String,
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({
    description: 'id Акторів фільма',
    example: ['12345, 67890'],
    type: [String],
  })
  @IsArray()
  @ArrayUnique()
  @IsUUID('4', { each: true })
  actorIds?: string[];
}

export class CreateMovieResponse {
  @ApiProperty({
    description: 'ID фільма',
    example: '11111',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'Назва фільма',
    example: 'Top Gun',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: 'Опис фільма',
    example: 'Top Gun - це фільм про школу пілотів',
    type: String,
  })
  description?: string;

  @ApiProperty({
    description: 'Рік релізу',
    example: 1999,
    type: Number,
  })
  releaseYear: number;

  @ApiPropertyOptional({
    description: 'Рейтинг фільму',
    example: 5.4,
    type: Number,
  })
  rating?: number;

  @ApiPropertyOptional({
    description: 'Чи опубліковано фільму',
    example: false,
    type: Boolean,
  })
  isAvailable?: boolean;

  @ApiPropertyOptional({
    description: 'Жанр фільму',
    enum: Genre,
    enumName: 'Genre',
    example: Genre.DRAMA,
  })
  genre?: Genre;

  @ApiPropertyOptional({
    description: 'Постер до фільму',
    example: 'http://example.storag.com',
    type: String,
  })
  imageUrl: string;

  @ApiProperty({
    description: 'id Акторів фільма',
    example: ['12345, 67890'],
    type: [String],
  })
  actorIds?: string[];
}
