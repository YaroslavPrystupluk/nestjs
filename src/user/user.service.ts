import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity.js';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto.js';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find({
      where: {
        married: true,
      },
      order: {
        createdAt: 'desc',
      },
      // select: {
      //   firstName: true,
      //   lastName: true,
      //   birthday: true,
      //   createdAt: true,
      // },
    });
  }

  async findById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`Користувач з номером ${id} не знайдено`);
    }

    return user;
  }

  async create(dto: UserDto): Promise<UserEntity> {
    const user = this.userRepository.create(dto);

    return await this.userRepository.save(user);
  }

  async update(id: string, dto: UserDto): Promise<boolean> {
    const user = await this.findById(id);
    const updateData = Object.assign(user, dto);
    await this.userRepository.update(id, updateData);

    return true;
  }

  async delete(id: string): Promise<string> {
    const user = await this.findById(id);
    await this.userRepository.remove(user);
    return user.id;
  }
}
