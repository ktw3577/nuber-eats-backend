import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import { UserService } from './users.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query((returns) => Boolean)
  hi() {
    return true;
  }

  @Mutation((returns) => CreateAccountOutput)
  async CreateAccount(
    @Args('input') CreateAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    try {
      const { ok, error } = await this.usersService.createAccount(
        CreateAccountInput,
      );
      if (error) {
        return {
          ok,
          error,
        };
      }
      return {
        ok: true,
      };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  }

  @Mutation((returns) => LoginOutput)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    try {
      const { ok, error, token } = await this.usersService.login(loginInput);
      return { ok, error, token };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }

  @Query((returns) => User)
  @UseGuards(AuthGuard)
  me(@AuthUser() authUser: User) {
    return authUser;
  }
}
