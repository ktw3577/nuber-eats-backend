import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column } from 'typeorm';

type UserRole = 'client' | 'owner' | 'delivery';

@InputType({ isAbstract: true })
@ObjectType()
export class User extends CoreEntity {
  @Column()
  @Field((type) => String)
  email: string;

  @Column()
  @Field((type) => String)
  password: string;

  @Column()
  role: UserRole;
}
