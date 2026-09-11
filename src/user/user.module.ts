import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { UserEntity } from './entities/user.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEntity } from '../bank/entities/bank.entity.js';
import { PassportUserEntity } from './entities/passport.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, BankEntity, PassportUserEntity]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
