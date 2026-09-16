import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service.js';
import { UserModel } from './model/user.model.js';
import { Authorization } from '../auth/decorators/authorization.decorator.js';
import { Authorized } from '../auth/decorators/authorized.decorator.js';
import { UserRole, type User } from '../generated/prisma/client.js';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Authorization()
  @Query(() => UserModel)
  getMe(@Authorized() user: User) {
    return user;
  }

  @Authorization(UserRole.ADMIN)
  @Query(() => [UserModel])
  async getUsers() {
    return await this.userService.findAll();
  }
}
