import { MeetingPrisma } from '../../meeting.prisma';
import { v4 as uuidv4 } from 'uuid';

export class MeetingGroupParticipantRepository extends MeetingPrisma {
  public async participateGroup(meetingGroupId: string, userIds: string[]) {
    this.meetingGroupParticipant.createMany({
      data: userIds.map((participantId) => ({
        id: uuidv4(),
        meetingGroupId,
        participantId,
      })),
    });
  }

  public async removeParticipants(meetingGroupId: string, userIds: string[]) {
    this.meetingGroupParticipant.deleteMany({
      where: {
        meetingGroupId,
        participantId: {
          in: userIds,
        },
      },
    });
  }
}
