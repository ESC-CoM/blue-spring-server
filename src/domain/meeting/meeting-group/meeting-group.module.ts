import { Module } from '@nestjs/common';
import { MeetingGroupService } from './meeting-group.service';
import { MeetingGroupParticipantModule } from './meeting-group-participant/meeting-group-participant.module';

@Module({
  providers: [MeetingGroupService],
  imports: [MeetingGroupParticipantModule],
})
export class MeetingGroupModule {}
