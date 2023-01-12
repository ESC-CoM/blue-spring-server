import { Module } from '@nestjs/common';
import { MeetingGroupModule } from './meeting-group/meeting-group.module';

@Module({
  imports: [MeetingGroupModule],
})
export class MeetingModule {}
