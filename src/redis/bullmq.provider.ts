// redis/bullmq.provider.ts
import { Job, Queue, Worker } from 'bullmq';
import Redis from 'ioredis';

const connection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
};

const redisClient = new Redis({
  host: connection.host,
  port: connection.port,
  maxRetriesPerRequest: null,
});

export const EmailQueue = new Queue('email', { connection: redisClient });

export const EmailWorker = new Worker(
  'email',
  async (job: Job<{ to: string }>) => {
    console.log(`📨 Sending email to ${job.data.to}...`);
    // Simülasyon
    await new Promise((res) => setTimeout(res, 4000));
    console.log(`✅ Email sent to ${job.data.to}`);
  },
  { connection: redisClient },
);
