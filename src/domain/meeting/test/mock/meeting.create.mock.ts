import { MeetingCreateDto } from '../../dto/meeting.create.dto';
import { faker } from '@faker-js/faker/locale/ko';

const meetingCreateMock: (participantIds: string[]) => MeetingCreateDto = (
  participantIds,
) => {
  return {
    content: faker.datatype.string(150),
    title: faker.datatype.string(20),
    participantIds,
  };
};
