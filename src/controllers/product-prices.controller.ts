import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductPricesService } from '../services/product-prices.service';
import { CreateProductPriceDto } from '../dto/create-product-price.dto';
import { UpdateProductPriceDto } from '../dto/update-product-price.dto';

@Controller('product-prices')
export class ProductPricesController {
  constructor(private readonly productPricesService: ProductPricesService) {}

  @Post()
  create(@Body() createProductPriceDto: CreateProductPriceDto) {
    return this.productPricesService.create(createProductPriceDto);
  }

  @Get()
  findAll() {
    return this.productPricesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPricesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductPriceDto: UpdateProductPriceDto,
  ) {
    return this.productPricesService.update(id, updateProductPriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPricesService.remove(id);
  }
}
