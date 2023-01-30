import { UserInfoCreateDto } from './userInfo.create.dto';

export interface UserCreateDto {
  email: string; //   @db.VarChar(20) @unique
  userInfo: UserInfoCreateDto; //    @relation(fields: [userInfoId], references: [id])
  password: string;
}
