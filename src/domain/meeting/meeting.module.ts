import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingRepository } from './meeting.repository';
import { MeetingPrisma } from './meeting.prisma';

@Module({
  imports: [],
  providers: [MeetingService, MeetingRepository, MeetingPrisma],
})
export class MeetingModule {}
