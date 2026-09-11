import { Module } from '@nestjs/common';
import { BankService } from './bank.service.js';
import { BankController } from './bank.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEntity } from './entities/bank.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([BankEntity])],
  controllers: [BankController],
  providers: [BankService],
})
export class BankModule {}
