import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { OrderDetail } from './entities/order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetail])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule {}
