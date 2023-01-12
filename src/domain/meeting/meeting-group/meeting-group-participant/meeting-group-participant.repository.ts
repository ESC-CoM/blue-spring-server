import { MeetingPrisma } from '../../meeting.prisma';
import { v4 } from 'uuid';
import { Prisma, PrismaPromise } from '../../../../../prisma/meeting';

export class MeetingGroupParticipantRepository extends MeetingPrisma {
  public participateGroup(
    meetingGroupId: string,
    participantIds: string[],
  ): PrismaPromise<Prisma.BatchPayload> {
    return this.meetingGroupParticipant.createMany({
      data: participantIds.map((participantId) => ({
        id: v4(),
        meetingGroupId,
        participantId,
      })),
    });
  }

  public removeParticipants(
    meetingGroupId: string,
    participantIds: string[],
  ): PrismaPromise<Prisma.BatchPayload> {
    return this.meetingGroupParticipant.deleteMany({
      where: {
        meetingGroupId,
        participantId: {
          in: participantIds,
        },
      },
    });
  }

  public getParticipantInGroup(meetingGroupId: string) {
    return this.meetingGroupParticipant.findMany({
      where: {
        meetingGroupId,
      },
    });
  }

  public async modifyParticipantList(
    meetingGroupId: string,
    deleteTargets: string[],
    insertTargets: string[],
  ) {
    await this.$transaction([
      this.removeParticipants(meetingGroupId, deleteTargets),
      this.participateGroup(meetingGroupId, insertTargets),
    ]);
  }
}
