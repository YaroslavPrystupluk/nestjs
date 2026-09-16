import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { SandMessageDto } from './dto/sand-message.dto.js';

@Injectable()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  async sendMessage(dto: SandMessageDto) {
    const { text } = dto;
    const message = this.prismaService.message.create({
      data: {
        text,
      },
    });
    return message;
  }
}
