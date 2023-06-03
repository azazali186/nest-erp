import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PincodeService } from './pincode.service';
import { PincodeController } from './pincode.controller';
import { Pincode } from './entities/pincode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pincode])],
  controllers: [PincodeController],
  providers: [PincodeService],
})
export class PincodeModule {}
