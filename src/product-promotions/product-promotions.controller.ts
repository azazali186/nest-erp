import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductPromotionsService } from './product-promotions.service';
import { CreateProductPromotionDto } from './dto/create-product-promotion.dto';
import { UpdateProductPromotionDto } from './dto/update-product-promotion.dto';

@Controller('product-promotions')
export class ProductPromotionsController {
  constructor(
    private readonly productPromotionsService: ProductPromotionsService,
  ) {}

  @Post()
  create(@Body() createProductPromotionDto: CreateProductPromotionDto) {
    return this.productPromotionsService.create(createProductPromotionDto);
  }

  @Get()
  findAll() {
    return this.productPromotionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPromotionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductPromotionDto: UpdateProductPromotionDto,
  ) {
    return this.productPromotionsService.update(id, updateProductPromotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPromotionsService.remove(id);
  }
}
