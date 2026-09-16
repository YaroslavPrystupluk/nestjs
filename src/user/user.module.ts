import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserResolver } from './user.resolver.js';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false,
    }),
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
