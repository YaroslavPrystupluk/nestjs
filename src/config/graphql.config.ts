import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { isDev } from '../utils/is-dev.util.js';
import { Request, Response } from 'express';

export async function getGraphqlConfig(
  configService: ConfigService,
): Promise<ApolloDriverConfig> {
  return {
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    playground: isDev(configService),
    context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }),
  };
}
