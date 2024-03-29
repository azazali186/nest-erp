import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HsnCodesService } from '../services/hsn-codes.service';
import { HsnCodesController } from '../controllers/hsn-codes.controller';
import { HsnCode } from '../entities/hsn-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HsnCode])],
  controllers: [HsnCodesController],
  providers: [HsnCodesService],
})
export class HsnCodesModule {}
