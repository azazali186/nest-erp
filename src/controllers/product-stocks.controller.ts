import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductStocksService } from '../services/product-stocks.service';
import { CreateProductStockDto } from '../dto/create-product-stock.dto';
import { UpdateProductStockDto } from '../dto/update-product-stock.dto';

@Controller('product-stocks')
export class ProductStocksController {
  constructor(private readonly productStocksService: ProductStocksService) {}

  @Post()
  create(@Body() createProductStockDto: CreateProductStockDto) {
    return this.productStocksService.create(createProductStockDto);
  }

  @Get()
  findAll() {
    return this.productStocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productStocksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductStockDto: UpdateProductStockDto,
  ) {
    return this.productStocksService.update(id, updateProductStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productStocksService.remove(id);
  }
}
