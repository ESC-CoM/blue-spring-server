import { Module } from '@nestjs/common';
import { MeetingGroupParticipantService } from './meeting-group-participant.service';

@Module({
  providers: [MeetingGroupParticipantService],
})
export class MeetingGroupParticipantModule {}
