import { Injectable } from '@nestjs/common';
import { EmailQueue } from '../redis/bullmq.provider';

@Injectable()
export class EmailService {
  async sendWelcomeEmail(to: string) {
    await EmailQueue.add(
      'sendEmail',
      { to },
      {
        attempts: 3,
        backoff: { type: 'exponential', delay: 3000 },
        removeOnComplete: true,
      },
    );
  }
}
