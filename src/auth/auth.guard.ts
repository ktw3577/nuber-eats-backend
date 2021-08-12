import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const qqlContext = GqlExecutionContext.create(context).getContext();
    const user = qqlContext['user'];
    if (!user) {
      return false;
    }
    return true;
  }
}
