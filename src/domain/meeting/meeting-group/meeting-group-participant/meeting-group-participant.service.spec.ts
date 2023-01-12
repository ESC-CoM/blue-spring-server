import { Test, TestingModule } from '@nestjs/testing';
import { MeetingGroupParticipantService } from './meeting-group-participant.service';
import { MeetingGroupParticipantRepository } from './meeting-group-participant.repository';
import { v4 as uuidv4 } from 'uuid';

describe('MeetingGroupParticipantService', () => {
  let service: MeetingGroupParticipantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MeetingGroupParticipantService,
        MeetingGroupParticipantRepository,
      ],
    }).compile();

    service = module.get<MeetingGroupParticipantService>(
      MeetingGroupParticipantService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getParticipantByGroupId', async () => {
    const participantIds = Array.from([uuidv4(), uuidv4(), uuidv4()]);
    console.log(participantIds);
    const groupId = uuidv4();
    console.log(groupId);
    await service.addParticipantsToMeetingGroup(groupId, participantIds);
    const participants = await service.findMany(groupId);

    expect(participants.map((participant) => participant.participantId)).toBe(
      participantIds,
    );
  });
});
