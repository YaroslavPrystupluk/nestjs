import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'Базова модель від якої всі наслідуються',
  isAbstract: true,
})
export class BaseModal {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
