import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductAttributesService } from '../services/product-attributes.service';
import { ProductAttributesController } from '../controllers/product-attributes.controller';
import { ProductAttribute } from '../entities/product-attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAttribute])],
  controllers: [ProductAttributesController],
  providers: [ProductAttributesService],
})
export class ProductAttributesModule {}
