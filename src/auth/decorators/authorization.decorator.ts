import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guard/jwt.guard.js';
import { UserRole } from '../../generated/prisma/enums.js';
import { Roles } from './roles.decorator.js';
import { RolesGuard } from '../guard/roles.guard.js';

export function Authorization(...roles: UserRole[]) {
  if (roles.length > 0) {
    return applyDecorators(Roles(...roles), UseGuards(JwtGuard, RolesGuard));
  }
  return applyDecorators(UseGuards(JwtGuard));
}
