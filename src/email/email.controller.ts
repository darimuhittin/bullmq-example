// email/email.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async send(@Body('to') to: string) {
    await this.emailService.sendWelcomeEmail(to);
    return { status: 'queued', to };
  }
}
