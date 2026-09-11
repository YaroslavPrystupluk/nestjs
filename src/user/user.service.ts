import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  // constructor(
  //   @InjectRepository(UserEntity)
  //   private readonly userRepository: Repository<UserEntity>,
  //   @InjectRepository(BankEntity)
  //   private readonly bankRepository: Repository<BankEntity>,
  //   @InjectRepository(PassportUserEntity)
  //   private readonly passportRepository: Repository<PassportUserEntity>,
  // ) {}
  // async findAll(): Promise<UserEntity[]> {
  //   return await this.userRepository.find({
  //     // where: {
  //     //   isMarried: true,
  //     // }, // виведе поля по умові цій
  //     order: {
  //       createdAt: 'desc',
  //     },
  //     relations: {
  //       banks: true,
  //       passport: true,
  //     },
  //     // select: {
  //     //   firstName: true,
  //     //   lastName: true,
  //     //   birthday: true,
  //     //   createdAt: true,
  //     // }, // виведе тільки ті поля які в select
  //   });
  // }
  // async findById(id: string): Promise<UserEntity> {
  //   const user = await this.userRepository.findOne({
  //     where: { id },
  //     relations: {
  //       banks: true,
  //       passport: true,
  //     },
  //   });
  //   if (!user) {
  //     throw new NotFoundException(`Користувач з номером ${id} не знайдено`);
  //   }
  //   return user;
  // }
  // async create(dto: UserDto): Promise<UserEntity> {
  //   const { firstName, lastName, birthday, isMarried, passportId, bankIds } =
  //     dto;
  //   const banks = await this.bankRepository.find({
  //     where: {
  //       id: In(bankIds),
  //     },
  //   });
  //   let passport: PassportUserEntity | null = null;
  //   if (passportId) {
  //     passport = this.passportRepository.create({ series: passportId });
  //     await this.passportRepository.save(passport);
  //   }
  //   if (!banks || !banks.length) {
  //     throw new NotFoundException('Банк не знайдено');
  //   }
  //   const user = this.userRepository.create({
  //     firstName,
  //     lastName,
  //     passport,
  //     birthday,
  //     isMarried,
  //     banks,
  //   });
  //   return await this.userRepository.save(user);
  // }
  // async update(id: string, dto: UserDto): Promise<boolean> {
  //   const user = await this.findById(id);
  //   const updateData = Object.assign(user, dto);
  //   await this.userRepository.update(id, updateData);
  //   return true;
  // }
  // async delete(id: string): Promise<string> {
  //   const user = await this.findById(id);
  //   await this.userRepository.remove(user);
  //   return user.id;
  // }
}
