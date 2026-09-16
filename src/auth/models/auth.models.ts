import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'Модель токена доступу',
})
export class AuthModel {
  @Field(() => String)
  accessToken: string;
}
