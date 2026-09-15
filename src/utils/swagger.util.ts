import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { getSwaggerConfig } from '../config/swagger.config.js';
import { AuthModule } from '../auth/auth.module.js';

export function setupSwagger(app: INestApplication) {
  const config = getSwaggerConfig();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, config, {
      include: [AuthModule],
      operationIdFactory: (controllerKey, methodKey) =>
        `${controllerKey} - ${methodKey}`,
    });
  SwaggerModule.setup('/api/docs', app, documentFactory, {
    jsonDocumentUrl: 'api/swagger.json',
    yamlDocumentUrl: 'api/swagger.yaml',
    customSiteTitle: 'Nest js API Docs',
  });
}
