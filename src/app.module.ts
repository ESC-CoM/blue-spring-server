import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingModule } from './domain/meeting/meeting.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [MeetingModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
