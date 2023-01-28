import { MeetingPrisma } from './meeting.prisma';
import { MeetingCreateDto } from './dto/meeting.create.dto';
import { v4 } from 'uuid';
import { Prisma } from 'prisma/meeting';
import { Injectable } from '@nestjs/common';
import MeetingDelegate = Prisma.MeetingDelegate;

@Injectable()
export class MeetingRepository {
  private readonly meeting: MeetingDelegate<null>;

  constructor(private readonly prisma: MeetingPrisma) {
    this.meeting = prisma.meeting;
  }

  public async create(
    data: MeetingCreateDto,
    ownerId: string,
  ): Promise<string> {
    const id = v4();
    await this.meeting.create({
      data: {
        id,
        ownerGroup: {
          create: {
            id: v4(),
            ownerId,
            ...data,
            participants: {
              createMany: {
                data: data.participantIds.map((participantId) => ({
                  id: v4(),
                  participantId,
                })),
              },
            },
          },
        },
      },
    });
    return id;
  }
}
