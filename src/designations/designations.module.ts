import { Module } from '@nestjs/common';
import { DesignationsService } from './designations.service';
import { DesignationsController } from './designations.controller';

@Module({
  controllers: [DesignationsController],
  providers: [DesignationsService]
})
export class DesignationsModule {}
