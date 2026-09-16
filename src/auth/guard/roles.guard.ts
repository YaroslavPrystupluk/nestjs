import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserRole } from '../../generated/prisma/enums.js';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from '../../generated/prisma/client.js';
import { ROLES_KEY } from '../decorators/roles.decorator.js';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const rolesContext = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!rolesContext || rolesContext.length === 0) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    const user = request.user as User;

    if (!rolesContext.includes(user.role))
      throw new ForbiddenException('У Вас недостатньо прав');

    return true;
  }
}
