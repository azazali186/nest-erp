import { Module } from '@nestjs/common';
import { HsnCodesService } from './hsn-codes.service';
import { HsnCodesController } from './hsn-codes.controller';

@Module({
  controllers: [HsnCodesController],
  providers: [HsnCodesService]
})
export class HsnCodesModule {}
