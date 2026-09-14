import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './common/middlewares/logger.middleware.js';
import { ResponceInterceptor } from './common/interceptors/responce.interceptor.js';
import { AllExceptionFilter } from './common/filters/all-exceptions.filter.js';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MovieModule } from './movie/movie.module.js';
import { CreateMovieResponse } from './movie/dto/create-movie.dto.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.useGlobalInterceptors(new ResponceInterceptor());
  app.useGlobalFilters(new AllExceptionFilter());

  app.use(logger);

  const config = new DocumentBuilder()
    .setTitle('Nest Course API')
    .setDescription('API documentation for Nest course')
    .setVersion('1.0.0')
    .setContact(
      'Pristupliuk Yaroslav',
      'https://prystupliuk-portfolio.vercel.app/',
      'pristupliuk_y@ur.net',
    )
    .addBearerAuth()
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, config, {
      include: [MovieModule],
      operationIdFactory: (controllerKey, methodKey) =>
        `${controllerKey} - ${methodKey}`,
    });
  SwaggerModule.setup('/api/docs', app, documentFactory, {
    jsonDocumentUrl: 'api/swagger.json',
    yamlDocumentUrl: 'api/swagger.yaml',
    customSiteTitle: 'Nest js API Docs',
  });
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
