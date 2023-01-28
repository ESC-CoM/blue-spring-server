import { Injectable } from '@nestjs/common';
import { UserPrisma } from './user.prisma';
import { v4 } from 'uuid';
import { UserCreateDto } from './dto/user.create.dto';
import { RegisterType } from 'prisma/user';

@Injectable()
export class UserRepository extends UserPrisma {
  public async create(data: UserCreateDto, registerType: RegisterType) {
    const id = v4();
    this.user.create({
      data: {
        id: v4(),
        ...data,
        userInfo: {
          create: {
            id,
            ...data.userInfo,
            registerType,
          },
        },
      },
    });
  }
}
