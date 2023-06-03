import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionsService } from './promotions.service';
import { PromotionsController } from './promotions.controller';
import { Promotion } from './entities/promotion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Promotion])],
  controllers: [PromotionsController],
  providers: [PromotionsService],
})
export class PromotionsModule {}
