import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankEntity } from './entities/bank.entity.js';
import { Repository } from 'typeorm';
import { CreateBankDto } from './dto/create-bank.dto.js';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(BankEntity)
    public readonly bankRepository: Repository<BankEntity>,
  ) {}

  async create(dto: CreateBankDto): Promise<BankEntity> {
    const { name } = dto;

    const bank = this.bankRepository.create({ name });

    return await this.bankRepository.save(bank);
  }
}
