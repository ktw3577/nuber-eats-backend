import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';

@Module({})
export class UploadsModule {
  controllers: [UploadsController];
}
