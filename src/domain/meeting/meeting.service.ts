import { Injectable } from '@nestjs/common';
import { MeetingRepository } from './meeting.repository';
import { MeetingCreateDto } from './dto/meeting.create.dto';

@Injectable()
export class MeetingService {
  constructor(private readonly meetingRepository: MeetingRepository) {}

  public async createMeeting(
    data: MeetingCreateDto,
    ownerId: string,
  ): Promise<string> {
    return this.meetingRepository.create(data, ownerId);
  }
}
