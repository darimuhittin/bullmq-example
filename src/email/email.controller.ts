// email/email.controller.ts
import { Controller, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @EventPattern('send-email')
  async sendEmail(@Payload() data: { to: string }) {
    await this.emailService.sendWelcomeEmail(data.to);
    return { status: 'queued', to: data.to };
  }
}
