import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductPromotionDto } from '../dto/create-product-promotion.dto';
import { UpdateProductPromotionDto } from '../dto/update-product-promotion.dto';
import { ProductPromotion } from '../entities/product-promotion.entity';

@Injectable()
export class ProductPromotionsService {
  constructor(
    @InjectRepository(ProductPromotion)
    private productPromotionsRepository: Repository<ProductPromotion>,
  ) {}

  create(createProductPromotionDto: CreateProductPromotionDto) {
    return 'This action adds a new productPromotion';
  }

  findAll() {
    return `This action returns all productPromotions`;
  }

  findOne(id: string) {
    return `This action returns a #${id} productPromotion`;
  }

  update(id: string, updateProductPromotionDto: UpdateProductPromotionDto) {
    return `This action updates a #${id} productPromotion`;
  }

  remove(id: string) {
    return `This action removes a #${id} productPromotion`;
  }
}
