import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../prisma/user';

@Injectable()
export class UserPrisma extends PrismaClient {}
