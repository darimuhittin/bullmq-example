import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Start the application
  await app.listen(process.env.PORT ?? 3467);
}

void bootstrap();
