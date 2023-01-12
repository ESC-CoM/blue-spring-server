import { Test, TestingModule } from '@nestjs/testing';
import { MeetingGroupParticipantService } from './meeting-group-participant.service';

describe('MeetingGroupParticipantService', () => {
  let service: MeetingGroupParticipantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetingGroupParticipantService],
    }).compile();

    service = module.get<MeetingGroupParticipantService>(
      MeetingGroupParticipantService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
