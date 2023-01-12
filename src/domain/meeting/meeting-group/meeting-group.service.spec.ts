import { Test, TestingModule } from '@nestjs/testing';
import { MeetingGroupService } from './meeting-group.service';

describe('MeetingGroupService', () => {
  let service: MeetingGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetingGroupService],
    }).compile();

    service = module.get<MeetingGroupService>(MeetingGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
