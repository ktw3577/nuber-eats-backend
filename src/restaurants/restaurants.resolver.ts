import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  @Query((resturns) => Boolean)
  isPizzaGood(): Boolean {
    return true;
  }
}
