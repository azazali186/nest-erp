import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorsService } from '../services/vendors.service';
import { VendorsController } from '../controllers/vendors.controller';
import { Vendor } from '../entities/vendor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor])],
  controllers: [VendorsController],
  providers: [VendorsService],
})
export class VendorsModule {}
