import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, UserRole } from '../../generated/prisma/client.js';

registerEnumType(UserRole, {
  name: 'UserRole',
});

@ObjectType()
export class UserModel implements User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Date)
  password: string;

  @Field(() => UserRole)
  role: UserRole;

  @Field(() => String)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
