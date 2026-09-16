import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, UserRole } from '../../generated/prisma/client.js';
import { BaseModal } from '../../auth/common/models/base.model.js';

registerEnumType(UserRole, {
  name: 'UserRole',
});

@ObjectType({
  description: 'Модель створення юзера',
})
export class UserModel extends BaseModal implements User {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Date)
  password: string;

  @Field(() => UserRole)
  role: UserRole;
}
