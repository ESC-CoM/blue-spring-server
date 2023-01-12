import { MeetingPrisma } from '../../meeting.prisma';
import { v4 as uuidv4 } from 'uuid';
import { Prisma, PrismaPromise } from '../../../../../prisma/meeting';

export class MeetingGroupParticipantRepository extends MeetingPrisma {
  public participateGroup(
    meetingGroupId: string,
    participantIds: string[],
  ): PrismaPromise<Prisma.BatchPayload> {
    return this.meetingGroupParticipant.createMany({
      data: participantIds.map((participantId) => ({
        id: uuidv4(),
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

  public async modifyParticipantListWithCompare(
    meetingGroupId: string,
    beforeParticipantIds: string[],
    afterParticipantIds: string[],
  ) {
    const deleteTargets = beforeParticipantIds.filter(
      (beforeParticipantId) =>
        !afterParticipantIds.includes(beforeParticipantId),
    );
    const insertTargets = afterParticipantIds.filter(
      (afterParticipantId) =>
        !beforeParticipantIds.includes(afterParticipantId),
    );
    await this.$transaction([
      this.removeParticipants(meetingGroupId, deleteTargets),
      this.participateGroup(meetingGroupId, insertTargets),
    ]);
  }
}
