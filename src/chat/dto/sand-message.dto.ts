import { IsString } from 'class-validator';

export class SandMessageDto {
  @IsString()
  text: string;
}
