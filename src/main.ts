import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createBullBoard } from '@bull-board/api';
import { ExpressAdapter } from '@bull-board/express';
import express from 'express';

import './redis/bullmq.provider';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, ExpressAdapter(server));

  serverAdapter = new ExpressAdapter(server);
  await app.listen(process.env.PORT ?? 3467);
}
bootstrap();
