import { Gender, Role } from 'prisma/user';

export interface UserInfoCreateDto {
  phone: string; //         String           @unique @db.Char(11)
  nickname: string; //           @db.VarChar(12)
  gender: Gender;
  birthYear: number;
  profileImageUrl: string;
  role: Role;
}
