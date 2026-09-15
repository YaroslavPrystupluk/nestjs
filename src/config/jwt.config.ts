import { ConfigService } from '@nestjs/config';
import type { JwtModuleOptions } from '@nestjs/jwt';

export async function geJwtConfig(
  configService: ConfigService,
): Promise<JwtModuleOptions> {
  return {
    global: true,
    secret: configService.getOrThrow('JWT_SECRET'),
    signOptions: { algorithm: 'HS256' },
    verifyOptions: { algorithms: ['HS256'], ignoreExpiration: true },
  };
}
