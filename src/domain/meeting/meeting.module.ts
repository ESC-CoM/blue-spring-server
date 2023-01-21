import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';

@Module({
  imports: [],
  providers: [MeetingService],
})
export class MeetingModule {}
