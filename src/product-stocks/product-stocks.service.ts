import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductStockDto } from './dto/create-product-stock.dto';
import { UpdateProductStockDto } from './dto/update-product-stock.dto';
import { ProductStock } from './entities/product-stock.entity';

@Injectable()
export class ProductStocksService {
  constructor(
    @InjectRepository(ProductStock)
    private productStocksRepository: Repository<ProductStock>,
  ) {}

  create(createProductStockDto: CreateProductStockDto) {
    return 'This action adds a new productStock';
  }

  findAll() {
    return `This action returns all productStocks`;
  }

  findOne(id: string) {
    return `This action returns a #${id} productStock`;
  }

  update(id: string, updateProductStockDto: UpdateProductStockDto) {
    return `This action updates a #${id} productStock`;
  }

  remove(id: string) {
    return `This action removes a #${id} productStock`;
  }
}
