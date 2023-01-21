import { UserCreateDto } from '../../dto/user.create.dto';
import { faker } from '@faker-js/faker/locale/de';
import { Gender } from '../../../../../prisma/user';

faker.setLocale('ko');
const createUsers: (number: number, Gender: Gender) => UserCreateDto[] = (
  number: number,
  gender: Gender,
) => {
  return Array(number).map((_) => ({
    email: faker.internet.email(),
    password: faker.datatype.string(10),
    userInfo: {
      birthYear: faker.datatype.number({
        min: 1997,
        max: 2003,
      }),
      phone: faker.phone.number('010-####-####'),
      nickname: faker.name.fullName(),
      gender,
      profileImageUrl: faker.image.people(),
      role: 'USER',
    },
  }));
};
export default createUsers;
