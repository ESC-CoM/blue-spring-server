import { Test, TestingModule } from '@nestjs/testing';
import { MeetingRepository } from '../meeting.repository';

describe('MeetingRepository', () => {
  let provider: MeetingRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetingRepository],
    }).compile();

    provider = module.get<MeetingRepository>(MeetingRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
