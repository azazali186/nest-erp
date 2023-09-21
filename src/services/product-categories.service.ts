import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductCategoryDto } from '../dto/create-product-category.dto';
import { UpdateProductCategoryDto } from '../dto/update-product-category.dto';
import { ProductCategory } from '../entities/product-category.entity';

@Injectable()
export class ProductCategoriesService {
  constructor(
    @InjectRepository(ProductCategory)
    private productCategorysRepository: Repository<ProductCategory>,
  ) {}

  create(createProductCategoryDto: CreateProductCategoryDto) {
    return 'This action adds a new productCategory';
  }

  findAll() {
    return `This action returns all productCategories`;
  }

  findOne(id: string) {
    return `This action returns a #${id} productCategory`;
  }

  update(id: string, updateProductCategoryDto: UpdateProductCategoryDto) {
    return `This action updates a #${id} productCategory`;
  }

  remove(id: string) {
    return `This action removes a #${id} productCategory`;
  }
}
