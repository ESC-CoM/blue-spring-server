import { Injectable } from '@nestjs/common';
import { MeetingGroupParticipantRepository } from './meeting-group-participant.repository';

@Injectable()
export class MeetingGroupParticipantService {
  constructor(
    private readonly meetingGroupParticipantRepository: MeetingGroupParticipantRepository,
  ) {}

  public async findMany(meetingGroupId: string) {
    const participants =
      await this.meetingGroupParticipantRepository.getParticipantInGroup(
        meetingGroupId,
      );
    return participants;
  }

  public async addParticipantsToMeetingGroup(
    meetingGroupId: string,
    participantIds: string[],
  ) {
    return this.meetingGroupParticipantRepository.participateGroup(
      meetingGroupId,
      participantIds,
    );
  }

  public async removeParticipantsFromMeetingGroup(
    meetingGroupId: string,
    participantIds: string[],
  ) {
    return this.meetingGroupParticipantRepository.removeParticipants(
      meetingGroupId,
      participantIds,
    );
  }

  public async modifyGroupParticipantList(
    meetingGroupId: string,
    beforeParticipantIds: string[],
    afterParticipantIds: string[],
  ) {
    const deleteTargets = this.getRelativeComplement(
      beforeParticipantIds,
      afterParticipantIds,
    );
    const insertTargets = this.getRelativeComplement(
      afterParticipantIds,
      beforeParticipantIds,
    );
    await this.meetingGroupParticipantRepository.modifyParticipantList(
      meetingGroupId,
      deleteTargets,
      insertTargets,
    );
  }

  private getRelativeComplement(source: string[], target: string[]) {
    return source.filter((sourceElement) => !target.includes(sourceElement));
  }
}
