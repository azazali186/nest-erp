import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductStocksService } from '../services/product-stocks.service';
import { ProductStocksController } from '../controllers/product-stocks.controller';
import { ProductStock } from '../entities/product-stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductStock])],
  controllers: [ProductStocksController],
  providers: [ProductStocksService],
})
export class ProductStocksModule {}
