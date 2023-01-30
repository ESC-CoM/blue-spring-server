import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserPrisma } from './user.prisma';

@Module({
  providers: [UserService, UserRepository, UserPrisma],
})
export class UserModule {}
