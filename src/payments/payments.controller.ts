import { Body, Controller, Post } from '@nestjs/common';

@Controller('payments')
export class PaymentsContoroller {
  @Post('/payments')
  processPaddlePayment(@Body() body) {
    return { ok: true };
  }
}
