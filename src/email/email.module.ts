// email/email.module.ts
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { BullModule } from '@nestjs/bullmq';
import { EmailConsumer } from './email.consumer';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'email' }),
    BullBoardModule.forFeature({ name: 'email', adapter: BullMQAdapter }),
  ],
  controllers: [EmailController],
  providers: [EmailService, EmailConsumer],
})
export class EmailModule {}
