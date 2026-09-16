import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { User } from '../../generated/prisma/client.js';
import { GqlExecutionContext } from '@nestjs/graphql';

export const Authorized = createParamDecorator(
  (data: keyof User | undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);

    const request = ctx.getContext().req;

    const user = request.user as User;

    if (!user) {
      return undefined;
    }

    return data ? user[data] : user;
  },
);
