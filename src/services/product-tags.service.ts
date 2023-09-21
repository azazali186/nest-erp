import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductTagDto } from '../dto/create-product-tag.dto';
import { UpdateProductTagDto } from '../dto/update-product-tag.dto';
import { ProductTag } from '../entities/product-tag.entity';

@Injectable()
export class ProductTagsService {
  constructor(
    @InjectRepository(ProductTag)
    private productTagsRepository: Repository<ProductTag>,
  ) {}

  create(createProductTagDto: CreateProductTagDto) {
    return 'This action adds a new productTag';
  }

  findAll() {
    return `This action returns all productTags`;
  }

  findOne(id: string) {
    return `This action returns a #${id} productTag`;
  }

  update(id: string, updateProductTagDto: UpdateProductTagDto) {
    return `This action updates a #${id} productTag`;
  }

  remove(id: string) {
    return `This action removes a #${id} productTag`;
  }
}
