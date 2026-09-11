import { Body, Controller, Post } from '@nestjs/common';
import { BankService } from './bank.service.js';
import { CreateBankDto } from './dto/create-bank.dto.js';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  // @Post()
  // create(@Body() dto: CreateBankDto) {
  //   return this.bankService.create(dto);
  // }
}
