import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Awesome API')
    .setDescription('A simple and powerful REST API built with nest js')
    .setContact(
      'Pristupliuk Yaroslav',
      'https://prystupliuk-portfolio.vercel.app/',
      'pristupliuk_y@ur.net',
    )
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
}
