import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    const users = await this.prismaService.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return users;
  }
}
