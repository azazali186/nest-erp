import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductPriceDto } from '../dto/create-product-price.dto';
import { UpdateProductPriceDto } from '../dto/update-product-price.dto';
import { ProductPrice } from '../entities/product-price.entity';

@Injectable()
export class ProductPricesService {
  constructor(
    @InjectRepository(ProductPrice)
    private productPricesRepository: Repository<ProductPrice>,
  ) {}

  create(createProductPriceDto: CreateProductPriceDto) {
    return 'This action adds a new productPrice';
  }

  findAll() {
    return `This action returns all productPrices`;
  }

  findOne(id: string) {
    return `This action returns a #${id} productPrice`;
  }

  update(id: string, updateProductPriceDto: UpdateProductPriceDto) {
    return `This action updates a #${id} productPrice`;
  }

  remove(id: string) {
    return `This action removes a #${id} productPrice`;
  }
}
