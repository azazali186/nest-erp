import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailsService } from '../services/order-details.service';
import { OrderDetailsController } from '../controllers/order-details.controller';
import { OrderDetail } from '../entities/order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetail])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule {}
