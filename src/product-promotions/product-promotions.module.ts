import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPromotionsService } from './product-promotions.service';
import { ProductPromotionsController } from './product-promotions.controller';
import { ProductPromotion } from './entities/product-promotion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPromotion])],
  controllers: [ProductPromotionsController],
  providers: [ProductPromotionsService],
})
export class ProductPromotionsModule {}
