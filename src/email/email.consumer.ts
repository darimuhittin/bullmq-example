import { OnQueueEvent, Processor } from '@nestjs/bullmq';
import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('email')
export class EmailConsumer extends WorkerHost {
  async process(job: Job<{ to: string }>) {
    console.log('Sending email to ', job.data.to);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const random = Math.random();
    if (random > 0.8) {
      throw new Error('There was an error sending the email');
    }
    console.log('Email sent to ', job.data.to);
  }

  @OnQueueEvent('failed')
  onFailed(job: Job<{ to: string }>, error: Error) {
    console.log('Email failed to send', job.data.to, error);
  }
}
