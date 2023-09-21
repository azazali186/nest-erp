import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductAttributeDto } from '../dto/create-product-attribute.dto';
import { UpdateProductAttributeDto } from '../dto/update-product-attribute.dto';
import { ProductAttribute } from '../entities/product-attribute.entity';

@Injectable()
export class ProductAttributesService {
  constructor(
    @InjectRepository(ProductAttribute)
    private productAttributesRepository: Repository<ProductAttribute>,
  ) {}

  create(createProductAttributeDto: CreateProductAttributeDto) {
    return 'This action adds a new productAttribute';
  }

  findAll() {
    return `This action returns all productAttributes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} productAttribute`;
  }

  update(id: string, updateProductAttributeDto: UpdateProductAttributeDto) {
    return `This action updates a #${id} productAttribute`;
  }

  remove(id: string) {
    return `This action removes a #${id} productAttribute`;
  }
}
