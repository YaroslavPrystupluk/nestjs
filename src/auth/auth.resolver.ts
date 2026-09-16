import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service.js';
import { AuthModel } from './models/auth.models.js';
import type { GqlContext } from './common/interfaces/gql-context.interface.js';
import { RegisterInput } from './inputs/register.input.js';
import { LoginInput } from './inputs/login.input.js';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthModel)
  register(@Context() { res }: GqlContext, @Args('data') input: RegisterInput) {
    return this.authService.register(res, input);
  }

  @Mutation(() => AuthModel)
  login(@Context() { res }: GqlContext, @Args('data') input: LoginInput) {
    return this.authService.login(res, input);
  }

  @Mutation(() => Boolean)
  logout(@Context() { res }: GqlContext) {
    return this.authService.logout(res);
  }

  @Mutation(() => AuthModel)
  refresh(@Context() { res, req }: GqlContext) {
    return this.authService.refresh(res, req);
  }
}
