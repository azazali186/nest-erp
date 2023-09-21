import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPricesService } from '../services/product-prices.service';
import { ProductPricesController } from '../controllers/product-prices.controller';
import { ProductPrice } from '../entities/product-price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPrice])],
  controllers: [ProductPricesController],
  providers: [ProductPricesService],
})
export class ProductPricesModule {}
