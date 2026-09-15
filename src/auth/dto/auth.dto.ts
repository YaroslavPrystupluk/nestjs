import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    title: 'JWT access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;
}
