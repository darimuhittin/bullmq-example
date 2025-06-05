import { Processor } from '@nestjs/bullmq';
import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('email')
export class EmailConsumer extends WorkerHost {
  async process(job: Job<{ to: string }>) {
    console.log('Sending email to ', job.data.to);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('Email sent to ', job.data.to);
  }
}
